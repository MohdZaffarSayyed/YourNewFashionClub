const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateUserRole,
    deleteUser
} = require("../controllers/userController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/register").post(registerUser); //register new user

router.route("/login").post(loginUser); //Login user

router.route("/password/forgot").post(forgotPassword); // forgot password sends email with token

router.route("/password/reset/:token").put(resetPassword); // reset password with token on url

router.route("/logout").get(logout); //logout user

router.route("/me").get(isAuthenticatedUser, getUserDetails); //getting user details 

router.route("/password/update").put(isAuthenticatedUser, updatePassword); //updating password directly

router.route("/me/update").put(isAuthenticatedUser, updateProfile); //updating profile except password

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser); // getting all users we have 

router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser) // Get data of user 
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole) // change role of user 
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser); // delete user

module.exports = router;