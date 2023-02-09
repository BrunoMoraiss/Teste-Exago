class SessionController {

    async index (req, res){
        res.render("users")
    }

}

module.exports = new SessionController()