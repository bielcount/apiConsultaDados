const mongoose = require("mongoose");

const CfopSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    tipo: { type: String, required: true }
});

module.exports = mongoose.model("Cfop", CfopSchema);
