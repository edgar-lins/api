//Arquivo para armazenar todas as rotas de usuários
const { Router } = require("express");

//importa controllers
const UsersController = require("../controllers/UsersController")

// Variavé que inicializa o Router
const usersRoutes = Router();

//criando uma nova instância
const usersController = new UsersController();

//Acessa as rotas de usuário para fazer a requisição
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

//modulo para exportar o arquivo
module.exports = usersRoutes;