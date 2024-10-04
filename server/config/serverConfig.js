require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cookieParser());
};

module.exports = serverConfig;