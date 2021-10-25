// Remember: define a method to name files when you're working with others.

const faker = require("faker");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(i = 0; i < limit; i++){
    products.push([{
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.imageUrl(),
    }])
  };
  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id === "999"){
    res.status(404).json({
      message: "not found"
    })
  } else {
    res.json({
      id,
      name: "product 2",
      price: 1000
    })
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "created",
    data: body
  })
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "created",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id,
  });
});

module.exports = router;
