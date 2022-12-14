var express = require("express");
const { isAuth } = require("../utils/auth");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, _) {
  const {
    sort_field,
    sort_order_mode,
    filter_field,
    filter_value,
    page = 1,
    page_size = 1,
  } = req.query;
  // console.log(parseInt(page_size));
  const startIndex = (parseInt(page) - 1) * page_size;
  const endIndex = page * page_size;

  const message = await req.context.models.User.find({
    [filter_field]: [filter_value],
  })
    .sort({
      [sort_field]: [sort_order_mode],
    })
    .limit(parseInt(page_size))
    .skip(startIndex);
  res.status(200).json(message);
});
router.get("/:id", async function (req, res, _) {
  const message = await req.context.models.User.find({
    id: req.params.id,
  });
  res.status(200).json(message);
});

router.post("/", async (req, res) => {
  const { firstname, lastname, gender, date_of_birth } = req.body;

  const message = await req.context.models.User.create({
    firstname,
    lastname,
    gender,
    date_of_birth,
  });
  res.status(200).json({ error: false, message });
});

router.put("/:id", async (req, res) => {
  const { User } = req.context.models;
  const { id } = req.params;
  const data = req.body;

  const user = await User.findOneAndUpdate(
    {
      id,
    },
    data,
    { new: true }
  );
  res.status(200).send(user);
});

router.delete("/:id", async (req, res) => {
  const { User } = req.context.models;
  const { id } = req.params;

  await User.deleteOne({
    id,
  });
  res.send(200);
});

router.get("/secrets", (req, res) => {
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
