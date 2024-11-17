const express = require("express")
const router = express.Router()

const Post = require("../controllers/postsControlls.js")

router.get("/", (req,res)=>{
    Post.getAllPosts(req,res)
})

router.post("/", (req,res)=>{
    Post.createPost(req,res)
})

module.exports = router