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
    color:{
        type:Object,
        required:true,
    },
    offer:{
        type:String,
    },
    date : {
        type : Date,
        default : Date.now
    },
})
postSchema.post('init', function(doc) {
    console.log('%s has been initialized from the db', doc._id);
  });
  postSchema.post('validate', function(doc) {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
postSchema.post('save', (doc)=> {
    console.log('%s has been saved', doc._id);
  });
const postsModel = mongoose.model("Posts",postSchema);

module.exports =  postsModel;