require("dotenv").config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

module.exports = {
  url: `mongodb+srv://${username}:${password}@backend.qcck7uq.mongodb.net/backend`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};