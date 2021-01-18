const mongoose = require("mongoose");

//schemas
const Post = require("./schemas/posts");
const User = require('./schemas/user');

mongoose.set('useCreateIndex', true);
//db connect

const dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
const dbOptions = {
    user: encodeURIComponent(process.env.DB_USERNAME),
    pass: encodeURIComponent(process.env.DB_PASSWORD),
    dbName: process.env.DB_DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(dbURI, dbOptions).then(()=>{console.log('connected db',process.env.DB_DATABASE_NAME)})
  .catch((err) => {
    console.log(err.message);
  });


module.exports = {Post,User};