const mongoose = require("mongoose");

const connectDatabase = () => {
    //when using locally we can directly write as "mongo://localhost:27017/NewFashionClub"

    mongoose.connect(process.env.DB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`Mongodb Connected with server: ${data.connection.host}`)
    });
};


module.exports = connectDatabase