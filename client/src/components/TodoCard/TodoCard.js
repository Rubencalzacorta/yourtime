import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { setUserTodoList } from "../../redux/actions/search"
import { updateDoing } from "../../redux/actions/search"

import "./TodoCard.css"

import {
    CheckIcon,
    CancelIcon,
    RecordingOff,
    RecordingOn,
    More
} from "../../icons/index"

import TodoServices from "../../Services/todo.services"
import UserServices from "../../Services/user.services"

const TodoCard = ({ _id, name, time, status, beginningDate }) => {

    const dispatch = useDispatch()

    const todoServices = new TodoServices()
    const userServices = new UserServices()

    const [todoOptions, setTodoOption] = useState(false)
    const [timer, setTimer] = useState(false)
    const [timerInterval, setTimerInterval] = useState(undefined)

    const toggleTodoOptions = () => setTodoOption(!todoOptions)

    const handleCardClick = () => toggleTodoOptions()

    //this function change the status of the todocard. the Time running depends on the "doing status"
    const handleStatusClick = (status) => {

        todoServices.changeStatus(_id, status)
            .then(() => userServices.getUser())
            .then(user => dispatch(setUserTodoList({ todos: user.todos })))
            .catch(err => console.log("error updating el user list", err))

        //setting up the beggining day of the task
        if (status === "Doing" && !beginningDate) {
            setBeginningDate()
        }
        //set the end date and stops interval
        if (status === "Done") {
            setEndDate()
            stopInterval()
        }

        if (status === "Todo" && timerInterval) {
            stopInterval()
        }

    }

    //when the interval is created, it stored its ID in the timerInterval state
    const stopInterval = () => clearInterval(timerInterval)

    const setBeginningDate = () => {
        const date = new Date()
        todoServices.setBeginning(_id, date)
            .catch(err => console.log("error incluyendo la fecha de inicio", err))
    }

    const setEndDate = () => {
        const date = new Date()
        todoServices.setEnd(_id, date)
            .catch(err => console.log("error incluyendo la fecha de inicio", err))
    }

    const handleDeleteClick = () => {
        todoServices.deleteTodo(_id)
            .then(() => userServices.removeTodo(_id))
            .then(user => dispatch(setUserTodoList({ todos: user.todos })))
            .catch(err => console.log("error borrando un todo", err))
    }

    //the use effect is used to trigger the interval. 
    //the the status is doing but the timer is false, then it starts the interval, 
    //saves its id on the state and turn sets timer to true

    // useEffect(() => {
    //     if (status === "Doing" && !timer) {
    //         const interval = setInterval(() => {
    //             time++
    //             dispatch(updateDoing({ _id, time }))
    //         }, 1000)

    //         setTimerInterval(interval)
    //         setTimer(true)
    //     }
    // })

    //this functions turns seconds into HH:MM:SS format
    const secondsToTime = (sec) => {

        const dateObj = new Date(sec * 1000);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();

        const timeString = hours.toString().padStart(2, '0') + ':' +
            minutes.toString().padStart(2, '0') + ':' +
            seconds.toString().padStart(2, '0');


        return timeString
    }

    return (
        // the tricky part of this render are all conditional stylings
        <div className={`todo-card ${status === "Todo" ? "todo" : status === "Doing" ? "doing" : "done"}`} >
            <div container className="card-info" >

                <div item className="title-wrapper">
                    <h5 >{status} </h5>
                    <p className={`time ${status === "Doing" && "play-time"}`}> {status === "Doing" ? "live" : "time"} <br /> {secondsToTime(time)}</p>
                </div>

                <div className={`task ${status === "Todo" && "todo"}`}>
                    <p>{name}</p>
                </div>

                <div className="todo-controls">
                    <div className="secundary-controls">
                        {todoOptions ?
                            <>
                                <CheckIcon style={{ width: 30, height: 30 }} onClick={() => handleStatusClick("Done")} />
                                <CancelIcon style={{ width: 30, height: 30 }} onClick={handleDeleteClick} />
                                <More style={{ width: 50, height: 50 }} onClick={handleCardClick} />
                            </>
                            :
                            <More style={{ width: 50, height: 50 }} onClick={handleCardClick} />
                        }
                    </div>

                    <div className="primary-controls">
                        {status != "Doing" ? <RecordingOff style={{ width: 50, height: 50 }} onClick={() => handleStatusClick("Doing")} /> : <RecordingOn style={{ width: 50, height: 50 }} onClick={() => handleStatusClick("Todo")} />}
                    </div>

                </div>

            </div>

        </div>


    )
}

//el comonente envuelto en withrouter para que se puedan hacer redirecciones mediante history
export default TodoCard
