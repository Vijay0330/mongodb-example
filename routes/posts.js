const express = require ("express");
const router = express.Router();
const postController = require("../controllers/postController")


//get all post from Db
router.get("/",postController.getAllPost);

// store a post in db
router.post("/",postController.storeAPost);

router.get("/p",postController.agre);
// get a specific post from Db
router.get("/:postId",postController.getSpecificPost);

// delete a specific post from Db
router.delete("/:postId", postController.deletePost);

// update a data of Db
router.patch("/:postId", postController.updatePost);

module.exports = router;