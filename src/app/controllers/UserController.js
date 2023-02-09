const User = require("../models/User")
const yup = require("yup")
const bcryt = require("bcrypt")

class UserController {

    async index (req, res){
        const users = await User.findAll({ //Pesquisando no banco de dados todos os usuarios
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        })

        res.json({users}) //Retornado via JSON todos os usuarios
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
        const id = req.params.id //Id do usuario passado através da URL 
        const { name, email, password } = req.body //Recebendo dados

        let user = {} //variavel para facilitar a atualização de um usuario

        const userVerification = await User.findOne({ //Verificando se existe um usuario que corresponde ao email passado
            where: {
                id
            }
        })

        if(userVerification == undefined){ //Caso não exista nenhum usuario localizado com esse id
            return res.status(404).json({err: "Usuario não está registrado"})
        }

        if(name == undefined && password == undefined && email == undefined){ //Caso não seja passado nenhuma informação para ser atualizada
            return res.status(400).json({err: "Informações passadas não estão corretas"})
        }

        if(name != undefined){ //Verificando se a propriedade 'name' vinda da requisição é undefined
            user.name = name //Caso não seja irei atribuir ao objeto user criado a cima
        }

        if(email != undefined){ //Verificando se a propriedade 'email' vinda da requisição é undefined
            user.email = email //Caso não seja irei atribuir ao objeto user criado a cima
        }

        if(password != undefined){ //Verificando se a propriedade 'password' vinda da requisição é undefined
            const hash = await bcryt.hash(password, 10) //Aplicando hash na senha recebida
            user.password = hash //Caso não seja irei atribuir ao objeto user criado a cima
        }

        await User.update(user, { //passando o objeto de usar para atualizar no banco de dados.
            where: {
                id
            }
        })

        res.status(200).json({msg: "Usuario Alterado com sucesso"})
    }

    async destroy (req, res){

    }

}

module.exports = new UserController()