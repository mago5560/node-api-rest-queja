const {Router} = require('express');
const router = Router();



router.get("/", (req,res) => {
    res.json({"nombre":"Luis Angel Mendoza Gonzalez",
            "carnet":"0908-08-13094"
            });
});

require('./test.route')(router)
//require('./region.route')(router)
//require('./departamento.route')(router)
//require('./municipio.route')(router)
//require('./comercio.route')(router)
//require('./queja.route')(router)

require('./login.route')(router)

module.exports = router;