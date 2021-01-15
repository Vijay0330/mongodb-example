const Post = require("../database").Post;
const User = require("../database").User;

const buyOrder = async (req, res) => {
  try {
    const { id, product, qty } = req.body;
    console.log(id, product, qty);
    const details = await User.update(
      { _id: id },
      { $set: { orders: { product: product, qty: qty } } }
    );

    res.json(details);
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};

module.exports = {
  buyOrder,
};
