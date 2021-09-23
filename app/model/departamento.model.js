module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define("departamento", {
      nombre: {
        type: Sequelize.STRING
      }
    });
  
    return Departamento;
  };