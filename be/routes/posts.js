const express = require('express')
const { createPost, getPost, getPosts, updatePost, deletePost } = require('../controller/postController')

const router = express.Router()

router.get('/', getPosts)

router.get('/:id', getPost)

router.post('/', createPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)


module.exports = router