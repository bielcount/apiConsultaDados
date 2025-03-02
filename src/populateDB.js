const mongoose = require("mongoose");
require("dotenv").config();
const Cfop = require("./models/Cfops");
const Csosn = require("./models/Csosns");
const Cst = require("./models/Csts");

const cfopData = require("./data/cfopsData.json");
const csosnData = require("./data/csosnData.json");
const cstData = require("./data/cstData.json");

console.log("📡 Carregando variáveis de ambiente...");
console.log("MONGO_URI:", process.env.MONGO_URI ? "OK" : "NÃO DEFINIDO");

const populateDB = async () => {
    try {
        console.log("🔌 Conectando ao MongoDB...");
        await mongoose.connect(process.env.MONGO_URI);

        console.log("🗑️ Apagando dados antigos...");
        await Cfop.deleteMany();
        await Csosn.deleteMany();
        await Cst.deleteMany();

        console.log("📥 Inserindo novos dados...");
        await Cfop.insertMany(cfopData);
        await Csosn.insertMany(csosnData);
        await Cst.insertMany(cstData);

        console.log("✅ Dados inseridos com sucesso!");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Erro ao popular o banco:", error);
    }
};

populateDB();
