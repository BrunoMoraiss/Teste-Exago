const { Router } = require("express");
const routes = new Router()
const SessionController = require("./app/controllers/SessionsController")
const UserController = require("./app/controllers/UserController");
const Auth = require("./app/middlewares/Auth")

//SESSIONS
routes.get("/", SessionController.home)
routes.get("/users", SessionController.usersList)
routes.post("/login", SessionController.login)
routes.get("/register", SessionController.register)


//User
routes.post("/user", UserController.create)
routes.get("/user", UserController.index)
routes.put("/user/:id", Auth, UserController.update)
routes.delete("/user/:id", Auth ,UserController.destroy)

module.exports = routes