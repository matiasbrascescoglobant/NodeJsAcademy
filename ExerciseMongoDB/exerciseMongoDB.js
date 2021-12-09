// importando dependencias
const { connect } = require("mongoose");
const { agenda } = require("./schema.js");
const FakeData = require("./fakeData.json");

const USER = "matiasbrascesco";
const PASSWORD = "matiasCloudMongodb";
const DATA_BASE = "exerciseMongo";

const CONECTOR = `mongodb+srv://${USER}:${PASSWORD}@clustermongodb.hv462.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`;

connect(CONECTOR)
.then(function(){
    console.log("connected")
})
.catch(function(){
    console.log("no connected")
});

const { names, lastNames } = FakeData;
const NAME = Math.floor(Math.random() * (names.length - 0));
const LAST_NAME = Math.floor(Math.random() * (lastNames.length - 0));

const DATA = {
    name: names[NAME],
    lastName: lastNames[LAST_NAME],
    age: NAME * 2,
    random: NAME * LAST_NAME
};

const AGEMDA = new agenda(DATA);

//insertar datos aleatorios de agenda
AGEMDA.save()
.then(function(){
    console.log("Data loaded")
})
.catch(function(){
    console.log("No Data loaded")
})

//ver los datos cargados de las agendas
agenda.find((err, agendas) => {

    if(err) throw err;

    console.log(agendas); 
    console.log("Inserted data.")
});


//actualizar agenda
 var agendaUpdate = {
    name: "MATIAS",
    lastName: "BRASCESCO",
    age: "33",
  };

  agenda.findByIdAndUpdate("61b0f390cf8ef465ccb5b8f9", agendaUpdate, (err, a) => {
    if(err) throw err;
    console.log(a);
    console.log("Modified data.");
  });
  

//eliminar agenda
agenda.findByIdAndDelete("61b0f390cf8ef465ccb5b8f9", (err, a) => {
    if(err) throw err;
    console.log(a);
    console.log("Deleted data.");
  });


