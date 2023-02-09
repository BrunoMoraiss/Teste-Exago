class SessionController {

    async usersList (req, res){
        res.render("users")
    }

    async home (req, res){
        res.render("home")
    }

}

module.exports = new SessionController()