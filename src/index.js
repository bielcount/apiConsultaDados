const express = require("express");
const cors = require("cors");
const connectDB = require("./database"); // Importa a conexão com o MongoDB

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Conectar ao MongoDB

app.use(cors());
app.use(express.json());

// Importando rotas
const csosnRoutes = require("./routes/csosnRoutes");
const cstRoutes = require("./routes/cstRoutes");
const cfopRoutes = require("./routes/cfopRoutes");

// Registrando as rotas
app.use("/api", csosnRoutes);
app.use("/api", cstRoutes);
app.use("/api", cfopRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
