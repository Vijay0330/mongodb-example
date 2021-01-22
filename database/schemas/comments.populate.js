const mongoose =require('mongoose');

const {Schema}=mongoose;

const commentSchema = new Schema({
    review:{
        type:String,
    },
    reviewBy :{
        type:Schema.Types.ObjectId,
        ref:'User-details'
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:'Posts'
    }
})

const commentModel = mongoose.model('comments',commentSchema);
module.exports=commentModel;