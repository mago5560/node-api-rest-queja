module.exports = (sequelize, Sequelize) => {
    const Comercio = sequelize.define("comercio", {
      nombre: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      }
    });
  
    return Comercio;
  };