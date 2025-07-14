import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
import restaurantRouter from "./routers/restaurant.router.js";
// const restaurantRouter = require('./routers/restaurant.router');

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Restaurant Restful API Test New ");
});
app.use("/api/v1/restaurant", restaurantRouter);
app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
