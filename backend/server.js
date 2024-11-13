import dotenv from "dotenv";
import app from "./src/app.js";
import conectaNaDatabase from "./config/dbConnect.js"; // Conectando ao DB

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao MongoDB
conectaNaDatabase();

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
