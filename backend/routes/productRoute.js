const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts); //get all products

router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts); //get all products(admin)

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct); //new product register 

router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct) // update product
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct) //delete product

router.route("/product/:id").get(getProductDetails); //get single product

router.route("/review").put(isAuthenticatedUser, createProductReview) // adding and updating review of a product

router.route("/reviews")
    .get(getProductReviews) // to see reviews of product
    .delete(isAuthenticatedUser, deleteReview); // to delete reviews



module.exports = router