const express = require("express");
const Csosn = require("../models/Csosn");

const router = express.Router();

// Criar um CSOSN
router.post("/", async (req, res) => {
    try {
        const csosn = await Csosn.create(req.body);
        res.status(201).json(csosn);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter todos os CSOSNs
router.get("/", async (req, res) => {
    const csosns = await Csosn.find();
    res.json(csosns);
});

// Obter um CSOSN por ID
router.get("/:id", async (req, res) => {
    try {
        const csosn = await Csosn.findById(req.params.id);
        if (!csosn) return res.status(404).json({ error: "CSOSN não encontrado" });
        res.json(csosn);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar um CSOSN
router.put("/:id", async (req, res) => {
    try {
        const csosn = await Csosn.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(csosn);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar um CSOSN
router.delete("/:id", async (req, res) => {
    try {
        await Csosn.findByIdAndDelete(req.params.id);
        res.json({ message: "CSOSN removido!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
