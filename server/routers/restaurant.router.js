import restaurantContrller from "../controllers/restaurant.controller.js";
import express from "express";

const router = express.Router();

//PORT http://localhost:5000/api/v1/restaurant
router.post("/", restaurantContrller.create);

//GET http://localhost:5000/api/v1/restaurant
router.get("/", restaurantContrller.getAll);

//GET http://localhost:5000/api/v1/restaurant
router.get("/:id", restaurantContrller.getById);

//PUT http://localhost:5000/api/v1/restaurant
router.put("/:id", restaurantContrller.Update);

//DELETE http://localhost:5000/api/v1/restaurant
router.delete("/:id", restaurantContrller.deleteById);

export default router;
