const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const cfopRoutes = require("./routes/cfops");
const csosnRoutes = require("./routes/csosns");
const cstRoutes = require("./routes/csts");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB conectado!"))
    .catch(err => console.error("❌ Erro ao conectar no MongoDB:", err));

app.use("/api/cfops", cfopRoutes);
app.use("/api/csosns", csosnRoutes);
app.use("/api/csts", cstRoutes);

app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
