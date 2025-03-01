const mongoose = require("mongoose");
require("dotenv").config();
const Cfop = require("./models/Cfop");
const Csosn = require("./models/Csosn");
const Cst = require("./models/Cst");

const cfopData = require("./data/cfopsData.json");
const csosnData = require("./data/csosnData.json");
const cstData = require("./data/cstData.json");

const populateDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await Cfop.deleteMany();
        await Csosn.deleteMany();
        await Cst.deleteMany();

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
