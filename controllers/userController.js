const User = require("../database").User;


const getAllUsers = async (req, res) => {
  try {
    //not send phone number and email details
    const user = await User.find().select('_id frist_name last_name age orders').exec();
    res.json(user);
  } catch (err) {
    res.json({ status: "false", message: err });
  }
};

const createUser = async (req, res) => {
  const newUser = new User({
    frist_name: req.body.frist_name,
    last_name: req.body.last_name,
    age: req.body.age,
    email: req.body.email,
    phone:req.body.phone,
  });
  newUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ status: "false", message: err });
      console.log(err)
    });
};

// // delete a specific post from Db
const deleteUser = async (req, res) => {
  try {
    const removedPost = await User.remove({ _id: req.params.userid });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

//show user names

const userName = async (req, res) => {
  try {
    const dist = await User.distinct("frist_name");
    res.json(dist);
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};

//find by name

const findName = async (req, res) => {
  try {
    const { name } = req.params;
    const details = await User.aggregate([
      { $match: { frist_name: name } },
      { $group: { _id: "$_id", name: "$frist_name" + " " + "last_name" } },
    ]);
    res.json(details);
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};
//filter by age

const ageFilter = async (req, res) => {
  try {
    const details = await User.aggregate([
      {
        $bucket: {
          groupBy: "$age",
          boundaries: [10, 20, 30, 40],
          default: "Other",
          output: {
            count: { $sum: 1 },
            details: {
              $push: {
                name: { $concat: ["$frist_name", " ", "$last_name"] },
                age: "$age",
              },
            },
          },
        },
      },
    ]);
    res.json(details);
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};
const ageLimit = async (req, res) => {
  try {
    const { age } = req.params;
    const details = await User.find({
      age: { $lt: age },
    });
    res.json(details);
  } catch (err) {
    res.json({ status: "false", message: "error" });
    console.log(err.properties);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  userName,
  findName,
  ageFilter,
  ageLimit
};
