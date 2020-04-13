const express = require('express');
const Todo = require('../models/Todo')
const router = express.Router();

//every 1 seconds, this interval checks for todos that are being done and adds 2 seconds. 

setInterval(() => {

    Todo.find({ status: "Doing" })
        .then(allDoing => {
            console.log("longitud de los todo", allDoing.length)
            console.log("todos todo", allDoing)
            allDoing.forEach((elm) => {
                console.log("previous element", elm)
                Todo.findByIdAndUpdate(elm._id, { $inc: { time: 2 } }, { new: true })
                    .then(updated => console.log("updated element", updated))
                    .catch(err => console.log("RC error adding to time in the back", err))
            })
        })
        .catch(err => console.log("RC err looking for the doing", err))

}, 2000)



module.exports = router;