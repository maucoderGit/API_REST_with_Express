const express = require("express");
const routerAPI = require("./src/index");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello! I'm your new e-commerce :D");
});

app.get("/new-rute", (req,res) => {
  res.send("Hello, I'm a new rute");
});

// app.get("/categories/:categoryId/characters/:id", (req,res) => {
//   const {categoryId, id} = req.params;
//   res.json({
//     categoryId,
//     id
//   })

routerAPI(app)

app.listen(port,() => {
  console.log("My port" + port);
});

// Install JSON Viewer as navigator extention
