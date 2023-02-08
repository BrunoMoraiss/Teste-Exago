class SessionController {

    async index (req, res){
        res.render("login")
    }

}

module.exports = new SessionController()