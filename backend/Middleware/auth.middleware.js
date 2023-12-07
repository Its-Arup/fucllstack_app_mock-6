const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(req.headers);
    if (token) {
      const decoded = jwt.verify(token, "secret");
      if (decoded) {
        req.username = decoded.username;
        req.userId = decoded.userId;
        next();
      }
    } else {
      return res.status(400).send({ msg: "login firts" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  auth,
};
