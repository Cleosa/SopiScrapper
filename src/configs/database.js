require('dotenv').config()

module.exports = {
   development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DIALECT,
      define: { charset: "utf8mb4", collate: "utf8_general_ci" },
      charset: "utf8mb4",
      timezone: "+07.00",
      logger: null,
      timezone: "Asia/Jakarta",
      dialectOptions: {
         useUTC: false,
         collate: "utf8_general_ci",
      },
      logging: false
   },
   test: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
   },
   production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DIALECT,
      define: { charset: "utf8mb4", collate: "utf8_general_ci" },
      charset: "utf8mb4",
      timezone: "+07.00",
      logger: null,
      timezone: "Asia/Jakarta",
      dialectOptions: {
         useUTC: false,
         collate: "utf8_general_ci",
      },
      logging: false
   }
}