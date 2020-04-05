const express = require('express');
const router = express.Router();

const User = require('../models/User')
const Todo = require('../models/Todo')

router.post("/newtodo", (req, res, next) => {

    Todo.create(req.body)
        .then(newTodo => res.status(200).json(newTodo))
        .catch(err => console.log("problema creando el todo", err))

})

router.post("/deletetodo", (req, res, next) => {
    Todo.findByIdAndDelete(req.body.id)
        .then(deletedTodo => res.status(200).json(deletedTodo))
        .catch(err => console.log("problema creando el todo", err))

})

router.post("/changestatus", (req, res, next) => {
    Todo.findByIdAndUpdate(req.body.id, { status: req.body.status }, { new: true })
        .then(updatedTodo => res.status(200).json(updatedTodo))
        .catch(err => console.log("error dandole play", err))
})

router.post("/setbeginning", (req, res, next) => {
    Todo.findByIdAndUpdate(req.body.id, { beginningDate: req.body.date }, { new: true })
        .then(updatedTodo => res.status(200).json(updatedTodo))
        .catch(err => console.log("error actualizando el comienzo", err))
})


router.post("/setend", (req, res, next) => {
    Todo.findByIdAndUpdate(req.body.id, { endDate: req.body.date }, { new: true })
        .then(updatedTodo => res.status(200).json(updatedTodo))
        .catch(err => console.log("error actualizando la fecha de fin", err))
})




module.exports = router;