import restaurantContrller from "../controllers/restaurant.controller.js";
import express from "express";

const router = express.Router();

//PORT http://localhost:5000/apiv1/restaurant
router.post("/", restaurantContrller.create);

export default router;
