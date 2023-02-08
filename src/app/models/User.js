const { DataTypes, Model } = require("sequelize")

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            name:{
                singular: 'user',
                plural: 'users'
            }
        }) 
    }
}

module.exports = User