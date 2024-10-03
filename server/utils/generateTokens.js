require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig")

function generateTokens(payload) {
  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN, {
      expiresIn: jwtConfig.access.expiresIn,
    }),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN, {
      expiresIn: jwtConfig.refresh.expiresIn,
    }),
  };
}

module.exports  = generateTokens