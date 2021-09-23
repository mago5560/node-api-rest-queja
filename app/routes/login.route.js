const jwt = require("jsonwebtoken");

module.exports = router =>{
    var api = require("express").Router();

    api.get("/:usuario/:contra",(req,res)=>{
        const usuario = req.params.usuario;
        const contraseña = req.params.contra;
        if(usuario=="Lmendoza" && contraseña =="123"){
            const token = jwt.sign({usuario},'LAMG');         
            res.json({token});
          }else{
            res.status(500).json({"mensaje":"Usuario No autorizado"})
          }
    });

    router.use("/api/login",api);
}