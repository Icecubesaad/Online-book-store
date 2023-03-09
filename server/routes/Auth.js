const express = require("express");
const user = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = "LOL BHAI";
const Fetchuser = require("../middleware/Fetchuser");
router.post("/signup", async (req, res) => {
  const { Email, Password } = req.body;
  const again = await user.findOne({ Email });
  if (again) {
    res.send("User already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashed_pass = await bcrypt.hash(Password, salt);
    const create_user = await user.create({
      Email: Email,
      Password: hashed_pass,
    });
    res.send(create_user);
  }
});
router.post("/signin", async (req, res) => {
  const { Email, Password } = req.body;
  const login_data = await user.findOne({ Email });
  try {
    if (!login_data) {
      res.status(500).json({ error: "Some error occurred" });

    }
    const compare_pass = await bcrypt.compare(Password, login_data.Password);
    if (!compare_pass) {
      res.status(500).json({ error: "Some error password" });

    }
    else{
      const User_data = {
        user: {
          id: login_data.id,
        },
      };
      const jwt_data = await jwt.sign(User_data, jwt_secret);
      res.send({jwt_data})
    }
    } catch (error) {
      res.status(500).json({ error: "Some error occurred" });

    }
});
router.get("/details", Fetchuser, async (req, res) => {
  try {
    const User_id = req.user.id
    const User_Data = await user.findById(User_id);
    res.send(User_Data);
  } catch (error) {
    res.status(500).json({ error: "Some error occurred" });
  }
});
module.exports = router;
