//shift+alt+f

const express =require('express'); /// do import
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');

const Post =require('./models/post')
const pageRouter =require('./router/pageRouter')
const postRouter=require('./router/postRouter')
mongoose.connect('mongodb://localhost/clean-blog-test-db');

app.set('view engine','ejs');
app.use(express.static('public')); //public klosoru altındaki butun dosyaları çalıştıracak

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//request --> want 
app.use("/",pageRouter);



app.get("/post",(req,res)=>{
    res.render('site/post')
})


//response --> answer
app.listen(process.env.PORT || 3000, ()=>{
    console.log('proje çalıştırıldı');
})