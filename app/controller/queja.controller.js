const db = require("../model");
const Obj = db.queja;
const Departamento = db.departamento;
const Municipio = db.municipio;
const Comercio = db.comercio;
const Op = db.Sequelize.Op;

exports.create=(req, res) =>{

    if (!req.body.observaciones) {
        res.status(400).send({
          message: "El Campo Observaciones es obligatorio."
        });
        return;
      }

      const _Obj = {
          fecha: req.body.fecha,
          observaciones: req.body.observaciones,
          comercioId: req.body.comercioId
      }

      Obj.create(_Obj)
      .then(data =>{res.json(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the object."
        });
    });

};

exports.findAll = (req, res) => {

    Obj.findAll({ include:[
                           { model:Comercio,
                             include:[{model:Municipio
                                      ,include:{model:Departamento ,include:'region' }
                                      } ]
                          }]      
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving object."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Obj.findByPk(id,{ include:[
        { model:Comercio,
          include:[{model:Municipio
                   ,include:{model:Departamento ,include:'region' }
                   }]
       }]
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving find one object with id=" + id
        });
      });
  };


exports.findOneComercio = (req, res) => {
  const id = req.params.id;

  Obj.findAll({where:{comercioId:id}, 
                include:[
                    { model:Comercio,
                      include:[{model:Municipio
                               ,include:{model:Departamento ,include:'region' }
                               }]
                   }]
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving find one object with id=" + id
      });
    });
};

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Obj.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Object was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update object with id=${id}. Maybe object was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating object with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Obj.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Object was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Object with id=${id}. Maybe Object was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Object with id=" + id
        });
      });
  };