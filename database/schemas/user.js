const mongoose = require("mongoose");
const {isEmail} =require('validator');
const baseOptions = {
  discriminatorKey: '__type',
  collection:'UserD'
  
}
const userSchema = mongoose.Schema({
  frist_name: {
    type: String,
    required: [true,'name is required'],
    minlength:[3,'need minimun 3 charector ']
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: [true,'age is required'],
    min:[18,'not allowed for register here']
  },
  email: {
    type: String,
    required: [true,'E-mail is required'],
    lowercase:true,
    validate:[isEmail,'please enter valid E-mail'],
    unique:true,
  
  },
  orders: {
    type: Object,
  },
  phone: {
    type:String,
    unique:true,
    validate: {
      validator: (v)=> {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
},baseOptions);




// userSchema.post('init', function(doc) {
//   console.log('%s has been initialized from the db', doc._id);
// });
userSchema.post('validate', function(doc) {
  console.log('%s has been validated (but not saved yet)', doc._id);
});
userSchema.post('save', (doc)=> {
  console.log('%s has been saved', doc._id);
});
const userModel = mongoose.model("User-details", userSchema);

const Add = userModel.discriminator('Address',  mongoose.Schema({
  house: { type: Number },
  street: {type:String},
  city:{type:String},
  state:{type:String}
}));



module.exports = {userModel,Add};
