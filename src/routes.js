const { Router } = require("express");
const routes = new Router()
const SessionController = require("./app/controllers/SessionsController")
const UserController = require("./app/controllers/UserController")

//SESSIONS
routes.get("/login", SessionController.index)


//User
routes.post("/user", UserController.create)
routes.get("/user", UserController.index)
routes.put("/user/:id", UserController.update)
routes.delete("/user/:id", UserController.destroy)

module.exports = routes