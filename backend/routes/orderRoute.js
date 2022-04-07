const express = require("express");
const {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder); // creating new order

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder); // getting order details 

router.route("/orders/me").get(isAuthenticatedUser, myOrders); // getting logged in users all orders 

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders); // getting all orders --admin

router.route("/admin/order/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder) //updating order status --admin
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder); //deleting order --admin

module.exports = router;