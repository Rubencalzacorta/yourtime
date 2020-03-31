const express = require('express');
const router = express.Router();

const User = require('../models/User')
const Todo = require('../models/Todo')

router.post("/newtodo", (req, res, next) => {

    Todo.create(req.body)
        .then(newTodo => {
            res.status(200).json(newTodo)
        })
        .catch(err => console.log("problema creando el todo", err))

})


module.exports = router;