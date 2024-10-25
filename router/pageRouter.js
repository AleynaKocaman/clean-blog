const express = require('express');
const router = express.Router();
const pageController = require('../controller/pageController');
const postController = require('../controller/postController');

//gelen isteği yönlerndirmek 

//anasayfaya gel
router.get('/', pageController.home)
//aboout sayfasına git
router.get('/about', pageController.about)
//post ekleme sayfasına git
router.get('/add_post', pageController.addPost)

//post ekleme işlemi
router.post('/new-post', postController.newPost)

//post getirme işlemi
router.get('/posts/:id', postController.getPage)

module.exports = router;