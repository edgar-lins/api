//importa sqlite3
const sqlite3 = require("sqlite3");

//importa sqlite
const sqlite = require("sqlite");

//biblioteca que resolve os endereços de acordo com o ambiente
const path = require("path")

//cria conexão com o banco de dados
async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

  return database;
}

module.exports = sqliteConnection;