const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const ExistingUser = await UserModel.findOne({ Email });

    if (ExistingUser) {
      res.status(400).send({ msg: "User already exists!" });
    } else {
      const newUser = await UserModel(req.body);
      const hashPass = await bcrypt.hash(Password, 8);
      newUser.Password = hashPass;
      await newUser.save();
      res.status(200).send({ msg: "new user registered!", user: newUser });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const ExistingUser = await UserModel.findOne({ Email });

    if (ExistingUser) {
      const compaire = await bcrypt.compare(Password, ExistingUser.Password);
      if (compaire) {
        const token = jwt.sign(
          {
            username: ExistingUser.Username,
            userId: ExistingUser._id,
          },
          "secret",
          { expiresIn: "7d" }
        );
        res.status(200).send({ msg: "login successful!", token: token });
      } else {
        res
          .status(400)
          .send({ msg: "please check your password and try again!" });
      }
    } else {
      res.status(400).send({ msg: "register first" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  userRouter,
};
