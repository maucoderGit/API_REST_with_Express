const express = require("express");
const router = express.Router();

router.get("/API/filter", (req, res) => {
    res.send("Yo soy un filter");
  });

router.get("/API", (req,res) => {
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

const characters_phrases = "/API/characters/:id";
router.get(characters_phrases, (req,res) => {
  const { id, phraseId } = req.params
  res.json({
    id
  });
});

const family = "/API/:id/phrase/:phraseId";
router.get(family, (req,res) => {
  const { id, phraseId } = req.params
  res.json({
    id,
    phraseId
  });
});

module.exports = router;
