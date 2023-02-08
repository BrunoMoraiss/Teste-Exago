const express = require("express")
const routes = require("./routes")
require("./database/index")

class App {
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
        this.ejs()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }

    ejs(){
        this.server.set('view engine', 'ejs')
    }
}

module.exports = new App().server