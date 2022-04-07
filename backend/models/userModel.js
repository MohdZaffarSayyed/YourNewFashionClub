const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        maxlength: [30, "Name cannot exceed 30 character "],
        minlength: [3, "Name must atleast contain 3 character "],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false, //it will not give this field wheever find funcation is called by admin also, since password should be safe
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

userSchema.pre("save", async function(next) {

    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
});


//JWT Token generation for authentication of role and giving access of post login
userSchema.methods.getJWTToken = function() {
    //here the JWT_SECRET key is very important for security if anyone get this key can login and make many fake admin accounts on website
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//Comapare Password 
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
};

//Generating Password  Reset Token 
userSchema.methods.getResetPasswordToken = function() {

    //generating token for password reseting using crypto 

    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;

}

module.exports = mongoose.model("User", userSchema);