const Cst = require("../models/Cst");

const getAllCsts = async (req, res) => {
    try {
        const csts = await Cst.find();
        res.json(csts);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CSTs" });
    }
};

const getCstByCode = async (req, res) => {
    try {
        const cst = await Cst.findOne({ codigo: req.params.codigo });
        if (!cst) return res.status(404).json({ error: "Código CST não encontrado" });
        res.json(cst);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CST" });
    }
};

module.exports = { getAllCsts, getCstByCode };
