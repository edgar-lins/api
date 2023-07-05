//Arquivo para armazenar todas as rotas de usuários
const { Router } = require("express");

//importa controllers
const NotesController = require("../controllers/NotesController")

// Variavé que inicializa o Router
const notesRoutes = Router();

//criando uma nova instância
const notesController = new NotesController();

//Acessa as rotas de usuário para fazer a requisição
notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

//modulo para exportar o arquivo
module.exports = notesRoutes;
