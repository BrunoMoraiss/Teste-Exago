const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const User = require("../app/models/User")
const Customer = require("../app/models/Customer")

const connection = new Sequelize(dbConfig)

User.init(connection)
Customer.init(connection)

module.exports = connection