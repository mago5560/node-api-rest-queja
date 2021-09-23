module.exports={
  //Local
    HOST:"localhost",
    PORT:5432,
    USER:"postgres",
    PASSWORD:"1234",
    DB: "angelDB",
    dialect: "postgres",
    pool: {
        max:10,
        min:0,
        acquire:30000,
        idle:10000
    }
    
};