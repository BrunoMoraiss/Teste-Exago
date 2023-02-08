const { Router } = require("express");
const routes = new Router()
const SessionController = require("./app/controllers/SessionsController")

routes.get("/login", SessionController.index)

module.exports = routes