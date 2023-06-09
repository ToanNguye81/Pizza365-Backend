// Khai báo thư viện ExpressJS
const express = require("express");

// Khai báo router app
const router = express.Router();

// Import order middleware
const orderMiddleware = require("../middlewares/orderMiddleware");

// Import course controller
const orderController = require("../controllers/orderController")

router.get("/orders", orderMiddleware.getAllOrderMiddleware, orderController.getAllOrder)

router.post("/orders", orderMiddleware.createOrderMiddleware, orderController.createOrder)

router.get("/orders/:orderId", orderMiddleware.getDetailOrderMiddleware, orderController.getOrderById)

router.put("/orders/:orderId", orderMiddleware.updateOrderMiddleware, orderController.updateOrderById)

router.delete("/orders/:orderId", orderMiddleware.deleteOrderMiddleware, orderController.deleteOrderById)

module.exports = router;