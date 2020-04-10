const express = require('express');
const Todo = require('../models/Todo')
const router = express.Router();

//every 2 seconds, this interval checks for todos that are being done and adds 2 seconds. 

setInterval(() => {

    Todo.find({ status: "Doing" })
        .then(allDoing => {
            allDoing.forEach((elm) => {
                Todo.findByIdAndUpdate(elm._id, { $inc: { time: 2 } }, { new: true })
                    .then(updated => console.log("RC time updated on cards"))
                    .catch(err => console.log("RC error adding to time in the back"))
            })
        })
        .catch(err => console.log("RC err looking for the doing", err))

}, 2000)



module.exports = router;