const {sequelize,DataTypes,Model} = require('./db')
class Customer extends Model {
}

Customer.init({
    customerName: DataTypes.STRING,
    orderId: DataTypes.INTEGER,
    paymentType: DataTypes.BOOLEAN
},
{   sequelize,
    timestamps:false
})

module.exports = {Customer}