const Cfop = require("../models/Cfops");

const getAllCfops = async (req, res) => {
    try {
        const cfops = await Cfop.find();
        res.json(cfops);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CFOPs" });
    }
};

const getCfopByCode = async (req, res) => {
    try {
        const cfop = await Cfop.findOne({ codigo: req.params.codigo });
        if (!cfop) return res.status(404).json({ error: "Código CFOP não encontrado" });
        res.json(cfop);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CFOP" });
    }
};

module.exports = { getAllCfops, getCfopByCode };
