const Post =require('../models/post')


const home=async (req,res)=>{
    const posts=await (await Post.find({})).reverse();
    res.render('site/index',{posts});
}

const about=(req,res)=>{
    res.render('site/about')
}
const addPost=(req,res)=>{
    res.render('site/add_post')
}

module.exports={
    home,
    about,
    addPost,
};