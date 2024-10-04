require("dotenv").config();
const tokensRouter = require("express").Router();
const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const generateTokens = require("../utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");

tokensRouter.get("/refresh", verifyRefreshToken, async (req, res) => {
  const user = res.locals.user;
  const { accessToken, refreshToken } = generateTokens({ user });
  if (!user) {
    res.clearCookie();
    res.json({ user: null });
  }

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
  });
  return res.json({ user, accessToken });
});

module.exports = tokensRouter;