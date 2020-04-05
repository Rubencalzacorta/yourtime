const express = require('express');
const Todo = require('../models/Todo')
const router = express.Router();


setInterval(() => {

    Todo.find({ status: "Doing" })
        .then(allDoing => {

            allDoing.forEach((elm) => {
                Todo.findByIdAndUpdate(elm._id, { $inc: { time: 2 } }, { new: true })
                    .then(updated => console.log(updated))
                    .catch(err => console.log("RC error adding to time in the back"))
            })
        })
        .catch(err => console.log("RC err looking for the doing", err))

}, 2000)



module.exports = router;