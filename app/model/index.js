const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(`${process.env.DATABASE_URI}?sslmode=require`, {
  url: process.env.DATABASE_URI,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // very important
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