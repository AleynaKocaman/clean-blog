//shift+alt+f

const express =require('express'); /// do import
const app = express();
require('dotenv').config()

app.use(express.static('public')); //public klosoru altındaki butun dosyaları çalıştıracak
app.set('view engine','ejs');
//request --> want 
app.get("/",(req,res)=>{
    res.render('site/index')
})

app.get("/about",(req,res)=>{
    res.render('site/about')
})

app.get("/add_post",(req,res)=>{
    res.render('site/add_post')
})

app.get("/post",(req,res)=>{
    res.render('site/post')
})

//response --> answer
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running on port 3000');
})