const express = require ("express");
const rotas = express.Router();

const upload = require("../config/multer");


const ImagemControle = require("../Controle/imagemdecontrole");

rotas.post("/", upload.single("file"), ImagemControle.create);

module.exports = rotas;