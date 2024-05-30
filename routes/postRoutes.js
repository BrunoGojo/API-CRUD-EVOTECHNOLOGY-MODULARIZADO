const express = require("express");
const { error } = require("console");
const { db } = require("../database");
const app = express.Router();
// APP POST

app.post("/Usuarios", (req, res) => {
  const { Cpf_usuario, curso, telefone, email, nome, sexo, data_nascimento } = req.body;
  console.log(req.body);

  if (!Cpf_usuario || !curso || !telefone || !email || !nome || !sexo || !data_nascimento) {
    res.send("Dados incompletos");
    return;
  } else {
    db.run(
      "INSERT INTO Usuario (Cpf_usuario, curso, telefone, email, nome, sexo, data_nascimento) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [Cpf_usuario, curso, telefone, email, nome, sexo, data_nascimento],
      (error) => {
        if (error) {
          res.send(error);
          return;
        }
        res.send(`Usuário: ${nome} cadastrado com sucesso`);
      },
    );
  }
});

app.post("/Professores", (req, res) => {
  const { Cpf_professor, data_nascimento_professor, nome, sexo, email, telefone, especializacao } = req.body;
  if(!Cpf_professor || !data_nascimento_professor || !nome || !sexo || !email || !telefone || !especializacao){
    res.send("Dados incompletos");
    return;
  } else {
    db.run("INSERT INTO Professor (Cpf_professor, data_nascimento_professor, nome, sexo, email, telefone, especializacao) VALUES (?, ?, ?, ?, ?, ?, ?)", [Cpf_professor, data_nascimento_professor, nome, sexo, email, telefone, especializacao], (error) => {
        if (error) {
          res.send(error);
          return;
        }
        console.log(req.body);
        res.send(`Professor: ${nome} cadastrado com sucesso`);
      },
    )
  }
})

module.exports = app;