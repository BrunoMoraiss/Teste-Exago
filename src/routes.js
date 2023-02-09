const { Router } = require("express");
const routes = new Router()
const SessionController = require("./app/controllers/SessionsController")
const UserController = require("./app/controllers/UserController")

//SESSIONS
routes.get("/login", SessionController.index)


//User
routes.post("/user", UserController.create)

module.exports = routes