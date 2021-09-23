const {Router} = require('express');
const router = Router();





require('./test.route')(router)
//require('./region.route')(router)
//require('./departamento.route')(router)
//require('./municipio.route')(router)
//require('./comercio.route')(router)
//require('./queja.route')(router)

require('./login.route')(router)

module.exports = router;