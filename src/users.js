const faker = require("faker");
const express = require("express");
const router = express.Router();

router.get("/filter", (req, res) => {
    res.send("Yo soy un filter");
  });

router.get("/", (req,res) => {
  const users = [{
    nombre: "Juan Gonzalez",
    id: 0000001,
  },{
    nombre: "Mauricio Gonzalez",
    id: 000002,
  },
  {
    nombre: "Donald Trump",
    id: 000003,
  }
  ]
  res.json({
    users
  })
});

const usersId = "/:id";
router.get(usersId, (req,res) => {
  const { id } = req.params
  res.json({
    id,
    name: faker.commerce.color
  })
});

const id = "/:id/users/:usersId";
router.get(id, (req,res) => {
  const { id, userId } = req.params
  res.json({
    id,
    userId
  })
});

module.exports = router;
