const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
//DB Heroku
const sequelize = new Sequelize({
  database: "d9j5v3466ida1j",
  username: "utpedahkltjljj",
  password: "6d47756a1bbf15d8b61d91783ee73982504555302fe4f0df46f0aa9cd3396c63",
  host: "ec2-18-209-143-227.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  }
});
/*
//Local
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
*/
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.region= require("./region.model")(sequelize,Sequelize);
db.departamento= require("./departamento.model")(sequelize,Sequelize);
db.municipio= require("./municipio.model")(sequelize,Sequelize);
db.comercio= require("./comercio.model")(sequelize,Sequelize);
db.queja= require("./queja.model")(sequelize,Sequelize);


//Relaciones
//de 1 a 1 

//de 1 a N
db.region.hasMany(db.departamento);
db.departamento.belongsTo(db.region);

db.departamento.hasMany(db.municipio);
db.municipio.belongsTo(db.departamento);

db.municipio.hasMany(db.comercio);
db.comercio.belongsTo(db.municipio);

db.comercio.hasMany(db.queja);
db.queja.belongsTo(db.comercio);


module.exports = db;