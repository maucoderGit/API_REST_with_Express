const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello! I'm your new e-commerce :D");
});

app.get("/new-rute", (req,res) => {
  res.send("Hello, I'm a new rute");
});

app.get("/characters", (req,res) => {
  res.json([{
    categorie: "character",
    name: "Monkey D. Luffy",
    phrase: "I'll become pirate king"
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

const characters_phrases = "/characters/:id/phrase/:phraseId";
app.get(characters_phrases, (req,res) => {
  const { id, phraseId } = req.params
  res.json({
    id,
    phraseId
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

app.listen(port,() => {
  console.log("My port" + port);
});

// Install JSON Viewer as navigator extention
