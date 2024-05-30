const express = require("express");
const { error } = require("console");
const { db } = require("../database");
const app = express.Router();
//GET ALL

app.get("/", (req, res) => {
  res.send("Estou na minha API")
})

app.get("/Usuarios", (req, res) => {
  db.all("SELECT * FROM Usuario", (error, rows) => {
    if (error) {
      res.send(error);
    }
    res.send(rows);
  });
});

app.get("/Professores", (req, res) => {
  db.all("SELECT * FROM Professor", (error, rows) => {
    if(error){
      res.send(error);
    }
    res.send(rows);
  })
})

// GET por ID

app.get("/Usuarios/:Cpf_usuario", (req, res) => {
  //A const CPF sigfinifica o ID do determinado usuario e colocar a variavel no parametro do db.all
  const cpf = req.params.Cpf_usuario;
  db.all("SELECT * FROM Usuario WHERE Cpf_usuario = ?", cpf, (error, rows) => {
    if (error) {
      res.send(error);
    }
    res.send(rows);
  });
});

app.get("/Professores/:Cpf_professor", (req, res) => {
  const cpf_professor = req.params.Cpf_professor;
  db.all("SELECT * FROM Professor WHERE Cpf_professor = ?", cpf_professor, (error, rows) => {
    if (error) {
      res.send(error);
    }
    res.send(rows);
  })
})

module.exports = app;