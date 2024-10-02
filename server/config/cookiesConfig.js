
const jwtConfig = require("./jwtConfig");

const cookiesConfig = {
  httpOnly: true,
  maxAge: jwtConfig.refresh.expiresIn,
};
module.exports = cookiesConfig;