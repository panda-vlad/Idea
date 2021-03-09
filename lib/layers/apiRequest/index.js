const axios = require("axios");
const userCreate = async (data) => {
  await axios.post("SOME_URL", {
    /** 
        SOME_DATA,
        ...data
    */
  });
};

module.exports = {
  userCreate,
};
