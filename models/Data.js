const mongoose = require('mongoose');
const { Schema } = mongoose;

const Newone = new Schema({
    temperatura: Number,
    humedad: Number,
    sonido: Number
});

mongoose.model('data', Newone);