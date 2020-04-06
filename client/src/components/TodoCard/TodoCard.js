import React, { useState, useEffect } from "react"
import Moment from "react-moment"


import { Card, Grid, Typography } from "@material-ui/core"
import style from "./style"


import { setLoggedUser, setUserTodoList } from "../../redux/actions/search"

import { useDispatch, useSelector } from "react-redux"

import { updateDoing } from "../../redux/actions/search"

import "./TodoCard.css"

import {
    PlayFilledIcon,
    // PlayEmptyIcon,
    PauseIcon,
    CheckIcon,
    CancelIcon,
    RecordingOff,
    RecordingOn,
    More
} from "../../icons/index"

import TodoServices from "../../Services/todo.services"
import UserServices from "../../Services/user.services"

//high order componente para poder hacer rutas donde quieras. Ahora se puede extraer history de los props

const TodoCard = ({ _id, name, time, category, status, beginningDate, endDate, idx }) => {

    const dispatch = useDispatch()

    const todoServices = new TodoServices()
    const userServices = new UserServices()

    const classes = style()

    const [todoOptions, setTodoOption] = useState(false)
    const [timer, setTimer] = useState(false)
    const [timerInterval, setTimerInterval] = useState(undefined)
    const [timeToShow, setTimeToShow] = useState(time)

    const toggleTodoOptions = () => setTodoOption(!todoOptions)

    const handleCardClick = () => toggleTodoOptions()

    const handleStatusClick = (status) => {

        // handleTimer()

        todoServices.changeStatus(_id, status)
            .then(() => userServices.getUser())
            .then(user => dispatch(setUserTodoList({ todos: user.todos })))
            .catch(err => console.log("error updating el user list", err))

        //setting up the beggining day of the task
        if (status === "Doing" && !beginningDate) {
            setBeginningDate()
        }

        if (status === "Done") {
            setEndDate()
        }

        if (status === "Todo" && timerInterval) {
            clearInterval(timerInterval)
        }

    }

    const setBeginningDate = () => {
        const date = new Date()
        todoServices.setBeginning(_id, date)
            .then(response => console.log(response))
            .catch(err => console.log("error incluyendo la fecha de inicio", err))
    }

    const setEndDate = () => {

        const date = new Date()
        todoServices.setEnd(_id, date)
            .then(response => console.log(response))
            .catch(err => console.log("error incluyendo la fecha de inicio", err))

    }

    const handleDeleteClick = () => {
        todoServices.deleteTodo(_id)
            .then(() => userServices.removeTodo(_id))
            .then(user => dispatch(setUserTodoList({ todos: user.todos })))
            .catch(err => console.log("error borrando un todo", err))
    }


    useEffect(() => {

        if (status === "Doing" && !timer) {
            const interval = setInterval(() => {
                time++
                dispatch(updateDoing({ idx, time }))
            }, 1000)

            setTimerInterval(interval)
            setTimer(true)
        }

    })


    return (
        <div className={`todo-card ${status === "Todo" ? "todo" : status === "Doing" ? "doing" : "done"}`} >
            <div container className="card-info" >
                <div item className="title-wrapper">
                    <h5>{status}</h5>
                    <p className={`${status === "Doing" && "play-time"}`}> {status === "Doing" ? "live" : "time"} <br /> {time}</p>
                </div>
                <div className="task">
                    <p>{name}</p>
                </div>
                <div className="todo-controls">
                    <div className="secundary-controls">
                        {todoOptions ?
                            <>
                                <CheckIcon onClick={() => handleStatusClick("Done")} />
                                <CancelIcon onClick={handleDeleteClick} />
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
