const yup = require("yup");
const acounts_model = require("../accounts/accounts-model");

const ac_Schema = yup.object().shape({
  name: yup
    .string()
    .required("name and budget are required")
    .min(2, "name of account must be between 3 and 100")
    .max(100, "name of account must be between 3 and 100"),
  budget: yup
    .number("budget of account must be a number")
    .required("name and budget are required")
    .min(0, "budget of account is too large or too small")
    .max(100000, "budget of account is too large or too small"),
});

exports.checkAccountPayload = async (req, res, next) => {
  // KODLAR BURAYA
  // Not: Validasyon için Yup(şu an yüklü değil!) kullanabilirsiniz veya kendiniz manuel yazabilirsiniz.

  try {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.trim();
    }
    await ac_Schema.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    await ac_Schema.validate(req.body);
    const checkName = await acounts_model.getByName(req.body.name);
    if (checkName) {
      res.status(400).json({ message: "that name is taken" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.checkAccountId = async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const checkAccount = await acounts_model.getById(req.params.id);
    if (!checkAccount) {
      res.status(404).json({ message: "account not found" });
    } else {
      req.Accounts_ = checkAccount;
      next();
    }
  } catch (error) {
    next(error);
  }
};
