const express = require("express");
const { error } = require("console");
const { db } = require("../database");
const app = express.Router();
// APP PUT

app.put("/Usuarios/:Cpf_usuario", (req, res) => {
  //A const CPF sigfinifica o ID do determinado usuario e colocar a variavel no parametro do db.run WHERE
  const cpf = req.params.Cpf_usuario;
  const { curso, telefone, email, nome, sexo, data_nascimento } = req.body;
  if (!curso || !telefone || !email || !nome || !sexo || !data_nascimento){
    res.send("Dados incompletos");
    return;
  }else{
    db.run(
      "UPDATE Usuario SET curso = ?, telefone = ?, email = ?, nome = ?, sexo = ?, data_nascimento = ? WHERE Cpf_usuario = ?",
      [curso, telefone, email, nome, sexo, data_nascimento, cpf],
      (error) => {
        if (error) {
          res.send(error);
          return;
        }
        console.log(req.body)
        res.send(`Usuário:${nome} atualizado com sucesso`);
      },
    );
  }
})

app.put("/Professores/:Cpf_professor", (req, res) => {
  const cpf_professor = req.params.Cpf_professor;
  const { data_nascimento_professor, nome, sexo, email, telefone, especializacao } = req.body;
  if(!data_nascimento_professor || !nome || !sexo || !email || !telefone || !especializacao) {
    res.send("Dados incompletos");
    return;
  } else {
    db.run("UPDATE Professor SET data_nascimento_professor = ?, nome = ?, sexo = ?, email = ?, telefone = ?, especializacao = ? WHERE Cpf_professor = ?", [data_nascimento_professor, nome, sexo, email, telefone, especializacao, cpf_professor], (error) => {
      if (error) {
        res.send(error);
        return;
      }
      res.send(`Professor:${nome} atualizado com sucesso`);
    })
  }
})

module.exports = app;