const mongoose=require('mongoose');
const {Schema} =mongoose;

const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User-details'
    },
    order : {
        type:Schema.Types.ObjectId,
        ref:'Posts'
    }
})

const orderModel = mongoose.model('Orders',orderSchema);

module.exports=orderModel;