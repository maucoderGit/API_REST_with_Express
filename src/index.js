const express = require("express");
const { router } = require("./products");

const productsRouter = require("./products")
const usersRouter = require("./users")

function routerAPI(app){
  const router = express.Router()
  app.use("/api/v1", router)

  router.use("/products", productsRouter)
  router.use("/users", usersRouter)
}

module.exports = routerAPI;
