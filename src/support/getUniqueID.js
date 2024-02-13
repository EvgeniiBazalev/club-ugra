const { v4: uuidv4 } = require("uuid");

const getUniqueID = () => {
  return uuidv4();
};

export default getUniqueID;
