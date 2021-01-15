const User = require("../database").User;

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};

const createUser = async (req, res) => {
  const newUser = new User({
    frist_name: req.body.frist_name,
    last_name: req.body.last_name,
    age: req.body.age,
    email: req.body.email,
  });
  newUser.save()
  .then(data => {
      res.json(data);
  })
  .catch(err =>{
      res.json({status : "false" , message : "error"})
  })
};

// // delete a specific post from Db
const deleteUser = async (req,res)=>{
    try {
        const removedPost = await User.remove({_id : req.params.userid });
        res.json(removedPost);
    } catch (err) {
        res.json({ message : err })
    }
};
module.exports={
    getAllUsers,
    createUser,
    deleteUser
}