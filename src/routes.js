const { Router } = require("express");
const routes = new Router()
const SessionController = require("./app/controllers/SessionsController")
const UserController = require("./app/controllers/UserController")
const CustomerController = require("./app/controllers/CustomerController")
const Auth = require("./app/middlewares/Auth")

//SESSIONS
routes.get("/", SessionController.home)
routes.get("/users", SessionController.usersList)
routes.post("/login", SessionController.login)
routes.get("/register", SessionController.register)
routes.get("/customers", SessionController.customers)


//User
routes.post("/user", UserController.create)
routes.get("/user", UserController.index)
routes.put("/user/:id", Auth, UserController.update)
routes.delete("/user/:id", Auth ,UserController.destroy)

//Customer
routes.post("/customer", CustomerController.craete)
routes.get("/customer", CustomerController.index)
routes.put("/customer/:id", CustomerController.update)

module.exports = routes