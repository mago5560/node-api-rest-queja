module.exports = router =>{

    var api = require("express").Router();

    api.get("/", (req,res) => {
        res.json({"mensaje":"Bienvenido Seminario UMG API REST"});
    });

    router.use("/api/test",api);
}