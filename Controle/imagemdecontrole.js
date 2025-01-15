const Imagem = require("../modelos/imagens");

exports.create = async (req, res) => {
    try {
        const {descrição} = req.body

        const file = req.body

        const picture = new Picture({
            descrição,
            src: file.path,
        });

        await picture.save();

        res.json({picture, msg: "Imagem salva com sulcesso!"})
        
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar a imagem!"})
    }
}