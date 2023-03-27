const db = require("../../data/db-config");

const getAll = () => {
  // KODLAR BURAYA
  return db("accounts");
};

const getById = (id) => {
  // KODLAR BURAYA
  return db("accounts").where({ id }).first();
};

const getByName = (name) => {
  return db("accounts").where("name", name).first();
};

const create = (account) => {
  return db("accounts")
    .insert(account)
    .then((ids) => {
      return getById(ids[0]);
    });
};

const updateById = (id, account) => {
  // KODLAR BURAYA
  return db("accounts")
    .where({ id })
    .update(account)
    .then((rows) => {
      return getById(id);
    });
};

const deleteById = (id) => {
  // KODLAR BURAYA
  return db("accounts").where("id", id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName,
};
