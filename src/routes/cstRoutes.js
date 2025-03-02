const express = require("express");
const Cst = require("../models/Cst");

const router = express.Router();

// Criar um CST
router.post("/", async (req, res) => {
    try {
        const cst = await Cst.create(req.body);
        res.status(201).json(cst);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obter todos os CSTs
router.get("/", async (req, res) => {
    const csts = await Cst.find();
    res.json(csts);
});

// Obter um CST por ID
router.get("/:id", async (req, res) => {
    try {
        const cst = await Cst.findById(req.params.id);
        if (!cst) return res.status(404).json({ error: "CST não encontrado" });
        res.json(cst);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar um CST
router.put("/:id", async (req, res) => {
    try {
        const cst = await Cst.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cst);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar um CST
router.delete("/:id", async (req, res) => {
    try {
        await Cst.findByIdAndDelete(req.params.id);
        res.json({ message: "CST removido!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
