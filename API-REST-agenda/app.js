//Importo dependencias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("tiny"));
app.use(cors()); // Access-Control-Allow-Origin: *
app.use(require('./routes/index'));

const USER = "matiasbrascesco";
const PASSWORD = "matiasCloudMongodb";
const DATA_BASE = "exerciseMongo";

const CONECTOR = `mongodb+srv://${USER}:${PASSWORD}@clustermongodb.hv462.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`;
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Abriendo la conexión a mongoDB Atlas
mongoose.connect(
  CONECTOR,
  OPTIONS,
  MongoError => {
      // si algo sale mal mostramos el error y paramos el servidor
      if (MongoError) {
          console.error(MongoError);
          process.exit(1);
      }
      // se inicia el servidor
      app.listen(8080, error => {
          // En caso de error indicamos el problemas
          if (error) {
              console.error(error);
              process.exit(1);
          }
          console.log("Conexión establecida con MongoDB Altas");
          console.log("Servidor listo");
      });
  }
);