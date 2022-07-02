const { checkIdValidate } = require('../helper/validate')
const postModel = require('../models/post')

const getPosts = async (req, res) => {
  const posts = await postModel.find({}).sort({ createdAt: -1 })
  return res.status(200).json(posts)
}

const getPost = async (req, res) => {
  const { id } = req.params
  if (checkIdValidate(id)) {
    const post = await postModel.findById(id)
    if (!post) {
      return res.status(400).json({err: 'Post not found'})
    }
    return res.status(200).json(post) 
  }
  return res.status(404).json({err: 'Id is not valid'})
}

const createPost = async (req, res) => {
  const { title, description } = req.body
  
  try {
    const post = await postModel.create({title, description})
    return res.status(200).json(post)
  } catch (error) {
    return res.status(400).json({msg: 'Ekleme hatası'})
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params
  if (checkIdValidate(id)) {
    try {
      const { title, description } = req.body
      const post = await postModel.findByIdAndUpdate({ _id: id }, {title, description})
      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).json({ msg: 'Ekleme hatası' })
    }
  }
  return res.status(404).json({err: 'Id is not valid'})
}

const deletePost = async (req, res) => {
  const { id } = req.params
  if (checkIdValidate(id)) {
    try {
      const post = await postModel.findOneAndDelete({ _id: id })
      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).json({ msg: 'Ekleme hatası' })
    }
  }
  return res.status(404).json({err: 'Id is not valid'})
}

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
}