import express from "express";
import Pensamento from "../models/pensamentoModel.js";

const router = express.Router();

// Rota para criar um novo Pensamento
router.post("/criarPensamentos", async (req, res) => {
  try {
    const { conteudo, autoria, modelo } = req.body;

    const novoPensamento = new Pensamento({
    
      conteudo,
      autoria,
      modelo,
    });

    await novoPensamento.save();
    res.status(201).json(novoPensamento); // Retorna o pensamento criado
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o pensamento", error });
  }
});

// Rota para pegar todos os Pensamentos
router.get("/pensamentos", async (req, res) => {
  try {
    const pensamentos = await Pensamento.find();
    res.status(200).json(pensamentos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar os pensamentos", error });
  }
});

// Rota para pegar um Pensamento por ID
router.get("/pensamentos/:id", async (req, res) => {
  try {
    const pensamento = await Pensamento.findById(req.params.id);
    if (!pensamento) {
      return res.status(404).json({ message: "Pensamento não encontrado" });
    }
    res.status(200).json(pensamento);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar o pensamento", error });
  }
});

// Rota para atualizar um Pensamento
router.put("/editarPensamentos/:id", async (req, res) => {
  console.log('ID recebido:', req.params.id); // Verifique se o ID está sendo capturado corretamente
  console.log('Dados recebidos no body:', req.body); // Verifique os dados no corpo

  try {
    const { conteudo, autoria, modelo } = req.body;
    const pensamentoAtualizado = await Pensamento.findByIdAndUpdate(
      req.params.id, // Certifique-se de que o ID está sendo recebido aqui
      { conteudo, autoria, modelo },
      { new: true }
    );

    if (!pensamentoAtualizado) {
      return res.status(404).json({ message: "Pensamento não encontrado" });
    }

    res.status(200).json(pensamentoAtualizado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o pensamento", error });
  }
});
// Rota para deletar um Pensamento
router.delete("/excluirPensamento/:id", async (req, res) => {
    try {
      const pensamentoDeletado = await Pensamento.findByIdAndDelete(req.params.id);
      if (!pensamentoDeletado) {
        return res.status(404).json({ message: "Pensamento não encontrado" });
      }
      res.status(200).json({ message: "Pensamento deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o pensamento", error });
    }
  });

export default router;
