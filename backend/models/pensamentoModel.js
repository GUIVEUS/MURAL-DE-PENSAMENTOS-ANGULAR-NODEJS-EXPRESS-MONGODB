import mongoose from "mongoose";
import { type } from "os";

const pensamentoSchema = new mongoose.Schema({


    conteudo: {
        type: String,
        required: true,
      },
      autoria: {
        type: String,
        required: true,
      },
      modelo: {
        type: String,
        required: true,
      },
});

const Pensamento = mongoose.model("Pensamento", pensamentoSchema);

export default Pensamento;