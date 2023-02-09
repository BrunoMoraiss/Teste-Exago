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

    async craete (req, res){
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
        
    }

    async destroy (req, res){
        
    }
}

module.exports = new CustomerController()