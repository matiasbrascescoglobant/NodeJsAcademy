const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Segenera el esquema base
const agendaSchema = new Schema({
    name: { type: String, require: [true, 'The name of the agenda cannot be empty.'] },
    lastname: String,
    age: Number,
    phoneNumber: String,
});

// exportamon el schema generado
module.exports = mongoose.model("Agenda", agendaSchema);