const mongoose = require("mongoose");

const CstSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    descricao: { type: String, required: true }
});

module.exports = mongoose.model("Cst", CstSchema);
