const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization?.split(" ")[1] || null;

    if (!token) {
      res.status(400).send({ msg: "login firts" });
    } else {
      const decoded = jwt.verify(token, "secret");
      if (decoded) {
        req.username = decoded.username;
        req.userId = decoded.userId;
        next();
      }
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports ={
    auth
}
