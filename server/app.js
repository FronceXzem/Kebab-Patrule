require("dotenv").config();
const express = require('express')


const app = express();

const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");


serverConfig(app);
app.use("/api", indexRouter);




app.listen(process.env.PORT, () => {
  console.log(`НАГИБАТОР${process.env.PORT}!`)
});