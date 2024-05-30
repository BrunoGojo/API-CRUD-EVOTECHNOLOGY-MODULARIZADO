const express = require("express");
const { error } = require("console");
const { db } = require("../database");
const app = express.Router();
// APP DELETE

app.delete("/Usuarios/:Cpf_usuario", (req, res) =>{
  //A const CPF sigfinifica o ID do determinado usuario e colocar a variavel no parametro do db.run WHERE
  const cpf = req.params.Cpf_usuario;
  db.run("DELETE FROM Usuario WHERE Cpf_usuario = ?", cpf, (error) => {
    if (error) {
      res.send(error);
      return;
    }
    res.send(`Usuário deletado com sucesso`);
  });
})

app.delete("/Professores/:Cpf_professor", (req, res) => {
  const cpf_professor = req.params.Cpf_professor;
  db.run("DELETE FROM Professor WHERE Cpf_professor = ?", cpf_professor, (error) => {
    if (error) {
      res.send(error);
      return;
    }
    res.send(`Professor deletado com sucesso`);
  })
})

module.exports = app;