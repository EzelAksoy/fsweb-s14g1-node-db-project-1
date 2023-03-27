const router = require("express").Router();

const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
} = require("./accounts-middleware");
const accountsModel = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const accounts = await accountsModel.getAll();
    res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  // KODLAR BURAYA
  try {
    res.status(201).json(req.Accounts_);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  async (req, res, next) => {
    try {
      // KODLAR BURAYA
      const { name, budget } = req.body;
      let newPost = await accountsModel.create({ name: name, budget: budget });
      res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
  async (req, res, next) => {
    // KODLAR BURAYA
    try {
      const { name, budget } = req.body;
      let changePost = await accountsModel.updateById(req.params.id, {
        name: name,
        budget: budget,
      });
      res.status(201).json(changePost);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", checkAccountId, async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const deleteAC = await accountsModel.deleteById(req.params.id);
    res.json(deleteAC);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // KODLAR BURAYA
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "İstenilen işlem gerçekleşemedi.",
  });
});

module.exports = router;
