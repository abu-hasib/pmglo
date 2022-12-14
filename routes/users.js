var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const {
    sort_field = "firstname",
    sort_order_mode = "asc",
    filter_field,
    filter_value,
    page = 1,
    page_size = 25,
  } = req.query;
  const startIndex = (parseInt(page) - 1) * page_size;
  const endIndex = page * page_size;
  try {
    const message = await req.context.models.User.find({
      [filter_field]: [filter_value],
    })
      .sort({
        [sort_field]: [sort_order_mode] || -1,
      })
      .limit(parseInt(page_size))
      .skip(startIndex);
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/:id", async function (req, res, _) {
  const message = await req.context.models.User.find({
    id: req.params.id,
  });
  console.log("$$$: ", message);
  res.status(200).json(message);
});

router.post("/", async (req, res) => {
  const { firstname, lastname, gender, date_of_birth } = req.body;

  try {
    const message = await req.context.models.User.create({
      firstname,
      lastname,
      gender,
      date_of_birth,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
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
  if (!user) {
    return res.status(400).send("User not found");
  }
  res.status(200).send(user);
});

router.delete("/:id", async (req, res) => {
  const { User } = req.context.models;
  const { id } = req.params;

  const user = await User.deleteOne({
    id,
  });
  if (user.deletedCount === 0)
    return res.status(400).send("User does not exist");
  res.sendStatus(200);
});

module.exports = router;
