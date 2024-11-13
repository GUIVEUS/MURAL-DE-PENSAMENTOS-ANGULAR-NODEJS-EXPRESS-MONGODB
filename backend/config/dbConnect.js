import mongoose from "mongoose";

async function conectaNaDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { });
    console.log("Conectado ao MongoDB!");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB", err);
    process.exit(1); // Finaliza o processo caso a conexão falhe
  }
}

export default conectaNaDatabase;
