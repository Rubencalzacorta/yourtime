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
                //for some reason i need to get a hold on, the todo gets duplicate added time (but not duplicate loop as the console.logs do not show. )
                Todo.findByIdAndUpdate(elm._id, { $inc: { time: 1 } }, { new: true })
                    .then(updated => console.log("updated element", updated))
                    .catch(err => console.log("RC error adding to time in the back", err))
            })
        })
        .catch(err => console.log("RC err looking for the doing", err))

}, 2000)



module.exports = router;    