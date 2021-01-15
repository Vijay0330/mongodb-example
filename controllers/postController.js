const Post = require("../database").Post;


//get all post from Db
const getAllPost =async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({status : "false" , message : "error"})
    }
};
const agre = async(req,res)=>{
    try {
        const post = await Post.aggregate( [
            { $match : { title:"bike"} },
            {$group : {_id:"$title",total:{$sum:"$price"}}}
          ]
       );
       const dist = await Post.distinct("price");
       res.json(post);
    }
    catch(err){
        res.json({status : "false" , message : "error"})
    }
}
// store a post in db
const storeAPost = async(req,res)=>{
    const post = new Post({
        title : req.body.title,
        description : req.body.description,
        price:req.body.price
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({status : "false" , message : "error"})
    })
};

// // get a specific post from Db
const getSpecificPost = async (req,res)=>{
    let id = req.params.postId;
    id = id.substring(1);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message : err })
    }
};

// // delete a specific post from Db
const deletePost = async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id : req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message : err })
    }
};

// // update a data of Db
const updatePost = async (req,res)=>{
    try {
        const updatePost = await Post.updateOne(
            {_id : req.params.postId },
            { $set : { title : req.body.title }}
        );
        res.json(updatePost);
    } catch (err) {
        res.json({ message : err })
    }
};

module.exports = {
    getAllPost,
    storeAPost,
    getSpecificPost,
    deletePost,
    updatePost,
    agre
};