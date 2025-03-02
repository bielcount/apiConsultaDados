const express = require("express");
const Cfop = require("../models/Cfop");

const router = express.Router();

// Criar um CFOP
router.post("/", async (req, res) => {
    try {
        const cfop = await Cfop.create(req.body);
        res.status(201).json(cfop);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter todos os CFOPs
router.get("/", async (req, res) => {
    const cfops = await Cfop.find();
    res.json(cfops);
});

// Obter um CFOP por ID
router.get("/:id", async (req, res) => {
    try {
        const cfop = await Cfop.findById(req.params.id);
        if (!cfop) return res.status(404).json({ error: "CFOP não encontrado" });
        res.json(cfop);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar um CFOP
router.put("/:id", async (req, res) => {
    try {
        const cfop = await Cfop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cfop);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar um CFOP
router.delete("/:id", async (req, res) => {
    try {
        await Cfop.findByIdAndDelete(req.params.id);
        res.json({ message: "CFOP removido!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
