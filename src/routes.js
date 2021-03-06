const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload")

const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();
const upload = multer(uploadConfig);

//posts
routes.get('/posts',PostController.index);
routes.post('/posts' , upload.single('image'),PostController.store);
//like
routes.post('/posts/:id/like',LikeController.store)

module.exports = routes;