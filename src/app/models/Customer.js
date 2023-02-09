const { DataTypes, Model } = require("sequelize")

class Customer extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            gender: DataTypes.STRING,
            birthday: DataTypes.STRING,
            nationality: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            phone: DataTypes.BIGINT,
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