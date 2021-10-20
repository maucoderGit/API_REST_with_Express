const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello! I'm your new e-commerce :D");
})

app.listen(port,() => {
  console.log("My port" + port)
});
