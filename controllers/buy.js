const Post = require("../database").Post;
const User = require("../database").User;
const Order = require("../database").Order;
const buyOrder = async (req, res) => {
  try {
    const { userId, proId } = req.body;
    console.log(userId,proId);
    const newOrder = new Order({
      user:userId,
      order:proId
    });



    let temp='';
    newOrder.save();
       await Order.find({})
              .populate('user')
              .populate('order')
              .exec(function(error, posts) {
                  console.log(JSON.stringify(posts, null, "\t"))
                  temp=posts
                  return posts;
                  
              });
console.log(temp,'order.....')
    // const or=newOrder.find().populate('user').populate('order')
    // console.log("orderPoulate...",newOrder)
    // const details = await User.update(
    //   { _id: id },
    //   { $set: { orders: { product: product, qty: qty } } }
    // );
    
    // const buyProduct = await User.aggregate([
    //   { $lookup:
    //      {
    //        from: 'Post',
    //        localField: 'orders',
    //        foreignField: 'title',
    //        as: 'orderdetails'
    //      }
    //    }
    //   ])
    
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};

module.exports = {
  buyOrder,
};
