const jwt = require("jsonwebtoken");

module.exports = router =>{
    const ws = require("../controller/departamento.controller.js");
    var api = require("express").Router();

    api.post("/",ensureToken, ws.create);
    api.get("/",ws.findAll);
    api.get("/:id",ws.findOne);
    api.get("/region/:id",ws.findOneRegion);
    api.put("/:id",ensureToken,ws.update);
    api.delete("/:id",ensureToken,ws.delete);

    router.use("/api/departamento",api);
}


function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(bearerToken,'LAMG',(err)=>{
          if(err){
              res.status(403).json({"mensaje":"Token incorrecto"});
          }else{
              next();
          }
      });
    } else {
      res.status(403).json({"mensaje":"Token requerido"});
    }
  }