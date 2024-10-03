const { getDishesController, createDishController, deleteDishController, updateDishController } = require("../controllers/dish.Controller");
const verifyAccessToken = require("../middleware/verifyAccessToken");

const dishRouter = require("express").Router();

dishRouter
.get("/", getDishesController)
.post("/", verifyAccessToken, createDishController)
.delete("/:id", verifyAccessToken, deleteDishController)
.put("/:id", verifyAccessToken, updateDishController)

module.exports = dishRouter