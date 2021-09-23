module.exports = (sequelize, Sequelize) => {
    const Region = sequelize.define("region", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return Region;
  };