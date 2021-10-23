const faker = require("faker");
const express = require("express");
const router = express.Router();

router.get("/API/filter", (req, res) => {
    res.send("Yo soy un filter");
  });

router.get("/API", (req,res) => {

});

const usersId = "/API/users/:id";
router.get(usersId, (req,res) => {
  const { id } = req.params
  res.json({
    id,
    name: faker.commerce.color
  })
});

const id = "/API/:id/users/:usersId";
router.get(id, (req,res) => {
  const { id, userId } = req.params
  res.json({
    id,
    userId
  })
});

module.exports = router;
