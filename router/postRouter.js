const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/new-post',postController.newPost);
router.get('/posts/:id',postController.getPage);


module.exports=router;