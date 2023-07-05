//Arquivo para armazenar todas as rotas de usuários
const { Router } = require("express");

//importa controllers
const TagsController = require("../controllers/TagsController")

// Variavé que inicializa o Router
const tagsRoutes = Router();

//criando uma nova instância
const tagsController = new TagsController();

//Acessa as rotas de usuário para fazer a requisição
tagsRoutes.get("/:user_id", tagsController.index);

//modulo para exportar o arquivo
module.exports = tagsRoutes;
