const mongoose=require('mongoose');

const baseOptions = {
    discriminatorKey: '__type',
    
}
const Base = mongoose.model('Base', new mongoose.Schema({base:{type:String}}, baseOptions));

const Order = Base.discriminator('Order', new mongoose.Schema({
    orderDate: { type: Date, default: Date.now },
    items: [String]
}));

const Customer = Base.discriminator('Customer', new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String }
}));
module.exports={Base,Order,Customer}
const base =new Base({
    base:'testBase'
})
const order = new Order({
    items: [
        "apple",
        "orange",
        "pear"
    ]
});
order.save((err, savedOrder) => {
    // console.log(JSON.stringify(savedOrder));
});

const customer = new Customer({
    firstName: "ram",
    lastName: "janu",
    email: "janu@doe.com"
});
customer.save((err, savedCustomer) => {
    //console.log(JSON.stringify(savedCustomer));
});