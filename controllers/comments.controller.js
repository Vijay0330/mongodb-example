const Comment = require("../database").comments;

const productReview = async (req, res) => {
  try {
    const { review, user, product } = req.body;
    const newComment = new Comment({
      review: review,
      reviewBy: user,
      product: product,
    });
    newComment.save();
    const comme = await Comment.find({})
      .populate("reviewBY")
      .populate("product");
    res.json(comme);
  } catch (err) {
    res.json({ status: "false", message: "error" });
  }
};
module.exports = { productReview };
