const express = require('express');
const router = express.Router();

const User = require('../models/User')
const Todo = require('../models/Todo')


router.post("/addtodo", (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { $push: { todos: req.body.id } }, { new: true })
        .populate("todos")
        .then(UpdatedUSer => res.status(200).json(UpdatedUSer))
        .catch(err => console.log("problema creando el todo", err))

})

router.post("/removetodo", (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { $pull: { todos: req.body.id } }, { new: true })
        .populate("todos")
        .then(UpdatedUSer => {
            console.log(UpdatedUSer)
            res.status(200).json(UpdatedUSer)
        })
        .catch(err => console.log("problema creando el todo", err))
})

router.get("/getuser", (req, res, next) => {
    User.findById(req.user._id)
        .populate("todos")
        .then(user => {
            console.log("este es el user populado", user)
            res.status(200).json(user)
        })
})



module.exports = router;