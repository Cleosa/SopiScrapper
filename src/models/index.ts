('use strict');

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV!;
const config = require(__dirname + '/../configs/database.js')[env];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
   sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
   sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config,
   );
}

fs.readdirSync(__dirname)
   .filter((file: string) => {
      return (
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js' &&
         file.indexOf('.research.js') === -1
      );
   })
   .forEach((file: any) => {
      const model = require(path.join(__dirname, file))(
         sequelize,
         Sequelize.DataTypes,
      );
      db[model.name] = model;
   });

Object.keys(db).forEach((modelName) => {
   if (db[modelName].associate) {
      db[modelName].associate(db);
   }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.sequelize.sync({ force: true });

export default db;
