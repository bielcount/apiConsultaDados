const mongoose = require("mongoose");

const CsosnSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    descricao: { type: String, required: true }
});

module.exports = mongoose.model("Csosn", CsosnSchema);
