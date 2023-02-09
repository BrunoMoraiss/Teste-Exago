const Customer = require("../models/Customer")
const yup = require("yup")

class CustomerController{
    async index (req, res){
        const customers = await Customer.findAll({ //Pesquisando no banco de dados todos os usuarios
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.json({customers})
    }

    async create (req, res){
        const { name, lastName, gender, birthday, nationality, email, address, city, state, phone } = req.body //Recebendo dados

        const schema = yup.object().shape({ //Lib utilizada para fazer a validação das informações
            name: yup.string().required().min(3),
            lastName: yup.string().required().min(5),
            birthday: yup.string().required().min(5),
            nationality: yup.string().required().min(3),
            email: yup.string().email().required(),
            address: yup.string().required().min(3),
            city: yup.string().required().min(3),
            state: yup.string().required().min(3),
            phone: yup.number().required()
        })

        const customer = { name, lastName, gender, birthday, nationality, email, address, city, state, phone } //Variavel para facilitar a validação das informações

        const verify = await schema.isValid(customer) //Essa verificação irá retornar verdadeiro ou falso

        if(verify){ //Caso a verificação seja verdadeira

            await Customer.create({ //Chamando o model para registrar a variavel customer no banco de dados
                name, 
                last_name: lastName,
                gender,
                birthday,
                nationality,
                email,
                address,
                city,
                state,
                phone
            }) 

            res.status(201).json({msg: "Usuario criado com sucesso"})
        }else{ //Caso a verificação seja falso
            return res.status(400).json({err: "Informações passadas estão incorreta"}) //Caso a validação retorne falso, ou seja, existe algum erro na validação.
        }
    }

    async update (req, res){
        const id = req.params.id

        const {name, last_name, gender, birthday, nationality, email, address, city, state, phone} = req.body //Recebendo dados

        const schema = yup.object().shape({ //Lib utilizada para fazer a validação das informações
            name: yup.string().required().min(1),
            last_name: yup.string().required().min(1),
            birthday: yup.string().required().min(1),
            nationality: yup.string().required().min(1),
            email: yup.string().email().required().min(1),
            address: yup.string().required().min(1),
            city: yup.string().required().min(1),
            state: yup.string().required().min(1),
            phone: yup.number().required().min(1)
        })

        const customer = {name, last_name, gender, birthday, nationality, email, address, city, state, phone} //Variavel para facilitar a validação das informações

        const verifyInfo = await schema.isValid(customer) //Essa verificação irá retornar verdadeiro ou falso

        if(verifyInfo){ //Caso a verificação seja verdadeira

            await Customer.update(customer, {
                where: {
                    id
                }
            })

            return res.status(200).json({msg: "Informações passadas corretamente"})
        }else{ //Caso a verificação seja falso
            return res.status(400).json({err: "Informações incorretas"}) //Caso a validação retorne falso, ou seja, existe algum erro na validação.
        }
    }

    async destroy (req, res){
        const id = req.params.id //Id do usuario passado através da URL 

        const customer = await Customer.findOne({ //Verificando se existe um usuario que corresponde ao ID passado
            where:{
                id
            }
        })

        await customer.destroy() //Deletando customer no banco de dados

        res.status(200).json({msg: "Cliente Deletado"})
    }
}

module.exports = new CustomerController()