const path = require('path');

module.exports = {
  development: {
    storage: process.env.DB_FILE || path.resolve(__dirname, '../db/dev.db'),
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    logging: false
  },
  test: {
    storage: process.env.DB_TEST_FILE || path.resolve(__dirname, '../db/test.db'),
    dialect: "sqlite",
    seederStorage: "sequelize",
    logging: false
  },
};
