const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    qty:{
        type:Number,
        required:true
    },
    date : {
        type : Date,
        default : Date.now
    },
})

const postsModel = mongoose.model("Posts",postSchema);

module.exports =  postsModel;