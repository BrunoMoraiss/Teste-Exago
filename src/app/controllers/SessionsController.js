const jwt = require("jsonwebtoken")
const tokenSecret = require("../../config/JWTToken")
const bcrypt = require("bcrypt")
const User = require("../models/User")

class SessionController {

    async usersList (req, res){
        res.render("users")
    }

    async home (req, res){
        res.render("home")
    }

    async login (req, res){
        const { email, password } = req.body //Informações do usuario enviada do frontend

        const user = await User.findOne({ //Verificando a existencia do usuario no banco de dados
            where: {
                email
            }
        })

        if(user == undefined){ //Verificando se encontrou o usuario no banco de dados
            return res.status(404).json({err: "Usuario não encontrado"})
        }

        const verifyPassword = await bcrypt.compare(password, user.password) //verificando se a senha informada é confere coo o hash do banco de dados

        if(verifyPassword){ //Caso a verificação passe
            const token = jwt.sign({name: user.name, email: user.email}, tokenSecret.token ,{expiresIn: '7d'})
            res.status(200).json({token: token})
        }else{
            res.status(406).json({err: "Senha Incorreta"})
        }
    }

}

module.exports = new SessionController()