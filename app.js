const express = require ("express");
const app = express();

require("dotenv").config();
require("./db")

const port = process.env.PORT || 3000

const ImagemRotas = require ("./rotas/imagem");

app.use("/imagens", ImagemRotas)

app.listen(port, () =>{
    console.log(`Servidor Rodando na porta ${port}`);
});