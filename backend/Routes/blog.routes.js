const express = require("express");
const { auth } = require("../Middleware/auth.middleware");
const { BlogModel } = require("../Model/blog.model");

const blogRouter = express.Router();

blogRouter.use(auth);

blogRouter.post("/blogs", async (req, res) => {
  try {
    const newBlog = await BlogModel(req.body);
    const date = new Date();
    newBlog.date = date;
    await newBlog.save();
    res.status(200).send({ msg: "blog create successfuly", data: newBlog });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

blogRouter.get("/blogs", async (req, res) => {
  try {
    const { q, category } = req.query;
    let quary = {};
    if (q) {
      quary.title = { $regex: q, Option: "i" };
    }
    if (category) {
      quary.category = { $regex: category, Option: "i" };
    }
    const allBlogs = await BlogModel.find(quary);

    res.status(200).send({ msg: "ok", data: allBlogs });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  blogRouter,
};
