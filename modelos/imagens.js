const mongoose = require ("mongoose");


const Schema = mongoose.Schema;



const imagensScheam = new Schema({
    descrição: {type: String, require: true},
    src: {type: String, require: true},

})


module.exports = mongoose.model("Imagen", imagensScheam);