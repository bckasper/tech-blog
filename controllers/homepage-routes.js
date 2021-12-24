const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// Router for getting all the posts to render to the homepage
router.get('/', async (request, response)=>{
    try{

        const allPosts = Post.findAll({
            include: [User],
        });

        const posts = allPosts.map((post => {
            post.get({plain: true})
        } ))

        response.render('all-posts', { posts })

    } catch (error) {
        response.status(500).json(error)
        console.log(error)
    }
})

