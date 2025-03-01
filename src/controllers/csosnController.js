const Csosn = require("../models/Csosn");

const getAllCsosn = async (req, res) => {
    try {
        const csosns = await Csosn.find();
        res.json(csosns);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CSOSNs" });
    }
};

const getCsosnByCode = async (req, res) => {
    try {
        const csosn = await Csosn.findOne({ codigo: req.params.codigo });
        if (!csosn) return res.status(404).json({ error: "Código CSOSN não encontrado" });
        res.json(csosn);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CSOSN" });
    }
};

module.exports = { getAllCsosn, getCsosnByCode };
