const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("database.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS Usuario (Cpf_usuario CHAR(11) PRIMARY KEY, curso VARCHAR(28) NOT NULL DEFAULT 'Indefinido', telefone VARCHAR(13) NOT NULL, email VARCHAR(80) UNIQUE NOT NULL, nome VARCHAR(50) NOT NULL, sexo CHAR(1) NOT NULL CHECK(sexo='M' OR sexo='F'),data_nascimento DATE NOT NULL)");

  db.run("CREATE TABLE IF NOT EXISTS Professor  (Cpf_professor CHAR(11) PRIMARY KEY, data_nascimento_professor DATE NOT NULL, nome VARCHAR(50) NOT NULL, sexo CHAR(1) NOT NULL CHECK (sexo='M' OR sexo='F'), email VARCHAR(80) UNIQUE NOT NULL, telefone VARCHAR(13) NOT NULL, especializacao VARCHAR(28) NOT NULL)");
});

module.exports = { db };