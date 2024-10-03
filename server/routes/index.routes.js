const indexRouter = require("express").Router();


const authRouter = require("./auth.routes");
const dishRouter = require("./dish.routes");

const tokensRouter = require("./tokens.routes");


indexRouter.use("/auth", authRouter);
indexRouter.use("/dishes", dishRouter);
indexRouter.use("/tokens", tokensRouter);

module.exports = indexRouter;