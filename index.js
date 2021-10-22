const faker = require("faker");
const express = require("express");
const { image } = require("faker");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello! I'm your new e-commerce :D");
});

app.get("/new-rute", (req,res) => {
  res.send("Hello, I'm a new rute");
});

app.get("/characters/filter", (req, res) => {
  res.send("Yo soy un filter");
});

app.get("/characters", (req,res) => {
  res.json([{
    categorie: "character",
    name: "Monkey D. Luffy",
    phrase: "I'll become pirate king",
    reward: 1500000
  }, {
    categorie: "character",
    name: "Nami",
    phrase: "I'll make the world map"
  }, {
    categorie: "character",
    name: "Vizmoke Sanji",
    phrase: "I'll find the All Blue"
  }]);
});

const characters_phrases = "/characters/:id";
app.get(characters_phrases, (req,res) => {
  const { id, phraseId } = req.params
  res.json({
    id
  });
});

const family = "/characters/:id/phrase/:phraseId";
app.get(family, (req,res) => {
  const { id, phraseId } = req.params
  res.json({
    id,
    phraseId
  });
});

app.get("/categories/:categoryId/characters/:id", (req,res) => {
  const {categoryId, id} = req.params;
  res.json({
    categoryId,
    id
  })
})

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send("Have not parameters")
  }
})


app.get("/products", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(i = 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.imageUrl(),
    })
  };
  res.json(products);
});

app.listen(port,() => {
  console.log("My port" + port);
});

// Install JSON Viewer as navigator extention
