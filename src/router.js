const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const mockUser = {
  username: "authguy",
  password: "mypassword",
  profile: {
    firstName: "Chris",
    lastName: "Wolstenholme",
    age: 43,
  },
};

router.post("/login", (req, res) => {
  const token = jwt.sign({ username: mockUser.username }, "secretsafewithme");

  //response in json object
  res.json({ token });
});

router.get("/profile", (req, res) => {});

module.exports = router;
