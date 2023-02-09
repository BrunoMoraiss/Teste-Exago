const express = require("express")
const routes = require("./routes")
const cors = require('cors')
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
        this.server.use(cors())
    }

    routes() {
        this.server.use(routes)
    }

    ejs(){
        this.server.set('view engine', 'ejs')
    }
}

module.exports = new App().server