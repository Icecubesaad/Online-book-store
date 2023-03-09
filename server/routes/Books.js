const express = require("express");
const Fetchuser = require("../middleware/Fetchuser");
const router = express.Router();
const book = require("../models/Books");
router.post("/addl", Fetchuser, async (req, res) => {
  const { Name, id, Url, price, description,pages,author } = req.body;
  const hehe = await book.findOne({ Id: id , User:req.user.id});
  if (hehe) {
    res.status(500).json({ error: "Already exists" });
  } else {
    const Books = await book.create({
      Name: Name,
      Price: price,
      Url: Url,
      Id: id,
      Description:description,
      Pages:pages,
      Author:author,
      User: req.user.id,
    });
    res.send(Books);
  }
});
router.get("/gets", Fetchuser, async (req, res) => {
  try {
    const get_book = await book.find({ User: req.user.id });
    if (!get_book) {
      res.send("No books");
    } else {
      res.json(get_book);
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/delete", Fetchuser, async (req, res) => {
  try {
    const { _id, User } = req.body;
    const yes = await book.find({ User: req.user.id });
    if (yes) {
      await book.deleteOne({ _id: _id, User: User });
    } else {
      res.status(500).json({ error: "Already exists" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
