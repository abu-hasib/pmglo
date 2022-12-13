var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/test", (req, res) => {
  res.send("Workin...");
});

function isAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === "password") {
    next();
  } else {
    res.status(401);
    res.send("Access forbidden");
  }
}

router.get("/secrets", isAuth, (req, res) => {
  const secrets = [
    {
      id: 1,
      name: "Secret 1",
    },
    {
      id: 2,
      name: "Secret",
    },
  ];

  res.json(secrets);
});
module.exports = router;
