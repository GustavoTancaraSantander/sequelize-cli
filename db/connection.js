// https://sequelize.org/v6/manual/getting-started.html
// https://sequelize.org/v6/class/src/sequelize.js~Sequelize.html#instance-constructor-constructor
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.js')[env];

const db = {};

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

db.connection = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;
