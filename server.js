const express = require('express');
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors= require("cors");
const app = express();

//cors settings
var corsOptions={
    origin: '*'
    ,method: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    ,preflightContinue: false
    ,optionsSuccessStatus:200
}

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors(corsOptions));
//app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//int DB
//const db= require('./app/model/index.js');
//db.sequelize.sync();
//recronstruir los Objetos
//db.sequelize.sync({force:true});

// routes
//app.use(require('./app/routes/index.js'));


app.get("/", (req,res) => {
    res.json({"nombre":"Luis Angel Mendoza Gonzalez",
            "carnet":"0908-08-13094"
            });
});


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});