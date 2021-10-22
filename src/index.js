const productsRouter = require("./products")
const charactersRouter = require("./characters")

function routerAPI(app){
  app.use("/products", productsRouter)
  app.use("/characters", charactersRouter)
}

module.exports = routerAPI;
