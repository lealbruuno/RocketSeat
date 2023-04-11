const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
/*
Como é uma UsersControoler é uma class é preciso instacinar/reservar na memória, então é preciso criar um new:
const usersControoler = new UsersControoler();
*/

const usersRoutes = Router();

const usersController = new UsersController();
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;
