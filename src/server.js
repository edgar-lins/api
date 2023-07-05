//importa o express async errors (npm install express-async-erros --save)
require("express-async-errors");

//importa banco de dados
const migrationsRun = require("./database/sqlite/migrations")

//importa o AppError
const AppError = require("./utils/AppError");

//importa o express
const express = require('express');

//importa rotas
const routes = require("./routes");

//inicia banco de dados 
migrationsRun();

//inicia o express
const app = express();

//transforma os dados em json
app.use(express.json());

app.use(routes);

app.use(( error, request, response, next ) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      messsage: error.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

//libera nossa api na porta 3333
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); 

