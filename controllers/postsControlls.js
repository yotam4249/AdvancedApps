
const Posts = require("../models/test_Schema")

const getAllPosts = (req,res)=>{
    res.send("All the posts are:")
}

const createPost = async (req,res)=>{
    const post = await Posts.create(req.body)
    res.send("Post created")
}

module.exports = {getAllPosts,createPost}