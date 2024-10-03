const indexRouter = require("express").Router();


const authRouter = require("./auth.routes");

const tokensRouter = require("./tokens.routes");


indexRouter.use("/auth", authRouter);

indexRouter.use("/tokens", tokensRouter);

module.exports = indexRouter;