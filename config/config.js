require('dotenv').config(); 
const fs = require('fs');
module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
    //   }
    }
  }
};