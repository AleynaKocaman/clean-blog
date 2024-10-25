const Post=require('../models/post');

const newPost= async (req,res)=>{
    // console.log(req.body)
    await Post.create(req.body) 
    res.redirect('/');
}

const getPage=async (req,res)=>{
    const posts=await Post.findById(req.params.id);
    res.render('site/post.ejs',{posts});
}

module.exports={
    newPost,
    getPage
}
