const express = require("express");
const cors = require("cors");
const { serverConnection } = require("./db");
const { userRouter } = require("./Routes/user.routes");
const { blogRouter } = require("./Routes/blog.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4500;

app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ msg: "home page" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});
app.listen(PORT, async () => {
  try {
    await serverConnection;
    console.log(`listening on ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
