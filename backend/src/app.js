import express from "express";
import cors from "cors"; // Para permitir comunicação com o Angular
import pensamentoRoutes from "../router/pensamentoRoutes.js"; // Importando as rotas

const app = express();

// Middleware
app.use(express.json()); // Para analisar os corpos das requisições como JSON
app.use(cors({
    origin: 'http://localhost:4200',
})); // Habilita CORS para permitir acesso ao frontend Angular

// Usar as rotas de pensamento
app.use("/", pensamentoRoutes);

export default app;
