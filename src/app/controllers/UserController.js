const User = require("../models/User")
const yup = require("yup")
const bcryt = require("bcrypt")

class UserController {

    async index (req, res){

    }

    async create (req, res){
        const { name, email, password } = req.body //Recebendo dados

        const schema = yup.object().shape({ //Lib utilizada para fazer a validação das informações
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        })

        const user = { name, email, password }

        const verify = await schema.isValid(user) //Essa verificação irá retornar verdadeiro ou falso

        if(verify){ //Caso a verificação seja verdadeira
            const hash = await bcryt.hash(password, 10) //Aplicando hash na senha recebida

            await User.create({name, email, password: hash})

            res.status(201).json({msg: "Usuario criado com sucesso"})
        }else{ //Caso a verificação seja falso
            return res.status(400).json({err: "Informações passadas estão incorreta"}) //Caso a validação retorne falso, ou seja, existe algum erro na validação.
        }
    }

    async update (req, res){

    }

    async destroy (req, res){

    }


}

module.exports = new UserController()