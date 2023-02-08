const { DataTypes, Model } = require("sequelize")

class Customer extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            lastName: DataTypes.STRING,
            gender: DataTypes.STRING,
            birthday: DataTypes.STRING,
            nationality: DataTypes.STRING,
            email: DataTypes.STRING,
            addres: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            phone: DataTypes.INTEGER,
        }, {
            sequelize,
            name:{
                singular: 'customer',
                plural: 'customers'
            }
        }) 
    }
}

module.exports = Customer