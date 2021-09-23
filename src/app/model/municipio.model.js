module.exports = (sequelize, Sequelize) => {
    const Municipio = sequelize.define("municipio", {
      nombre: {
        type: Sequelize.STRING
      }
    });
  
    return Municipio;
  };