const { UserCreate } = require("../../lib/layers/entities");

const createUser = async (req, res) => {
  const { body } = req;

  const createUserHelper = new UserCreate(body);

  const result = await createUserHelper.createUser();

  res.sendObj(result);
};

module.exports = {
  createUser,
};
