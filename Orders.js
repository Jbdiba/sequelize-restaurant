const {sequelize,DataTypes,Model} = require('./db')
class Orders extends Model {
}

Orders.init({
    customerId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    ordersDate: DataTypes.DATE,
    price: DataTypes.FLOAT
},
{   sequelize,
    timestamps:false
})

module.exports = {Orders}