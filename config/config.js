require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "database-2.ca8pdbmenue7.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "port": 13302
  },
  "test": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "database-2.ca8pdbmenue7.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "port": 13302
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": "database-2.ca8pdbmenue7.ap-northeast-2.rds.amazonaws.com",
    "dialect": "mysql",
    "port": 13302
  }
}

