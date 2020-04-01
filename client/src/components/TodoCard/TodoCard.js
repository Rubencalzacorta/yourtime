import React, { useState } from "react"


import { Card, Grid, Typography } from "@material-ui/core"
import style from "./style"


import { setLoggedUser, setUserTodoList } from "../../redux/actions/search"

import { useDispatch, useSelector } from "react-redux"

import {
    PlayFilledIcon,
    // PlayEmptyIcon,
    PauseIcon,
    CheckIcon,
    CancelIcon
} from "../../icons/index"

import TodoServices from "../../Services/todo.services"
import UserServices from "../../Services/user.services"

//high order componente para poder hacer rutas donde quieras. Ahora se puede extraer history de los props

const TodoCard = ({ _id, name, time, category, status, beginningDate, endDate }) => {

    const dispatch = useDispatch()

    const todoServices = new TodoServices()
    const userServices = new UserServices()

    const classes = style()

    const [todoOptions, setTodoOption] = useState(false)

    const toggleTodoOptions = () => setTodoOption(!todoOptions)

    const handleCardClick = () => toggleTodoOptions()

    const handleStatusClick = (status) => {

        todoServices.changeStatus(_id, status)
            .then(() => userServices.getUser())
            .then(user => dispatch(setUserTodoList({ todos: user.todos })))
            .catch(err => console.log("error updating el user list", err))
    }

    const handleDeleteClick = () => {
        todoServices.deleteTodo(_id)
            .then(() => userServices.removeTodo(_id))
            .then(user => dispatch(setUserTodoList({ todos: user.todos })))
            .catch(err => console.log("error borrando un todo", err))

    }

    return (
        <Card className={classes.cardContainer} >
            <Grid container onClick={handleCardClick}>
                <Grid item className={classes.titleContainer}>

                    <Typography>{name}</Typography>
                    <Typography>Time: {time}</Typography>

                </Grid>

            </Grid>

            {todoOptions &&
                <Grid container>
                    <Grid item className={classes.titleContainer}>
                        <PlayFilledIcon onClick={() => handleStatusClick("Doing")} />
                    </Grid>
                    <Grid item className={classes.titleContainer}>
                        <PauseIcon onClick={() => handleStatusClick("Todo")} />
                    </Grid>
                    <Grid item className={classes.titleContainer}>
                        <CheckIcon onClick={() => handleStatusClick("Done")} />
                    </Grid>
                    <Grid item className={classes.titleContainer}>
                        <CancelIcon onClick={handleDeleteClick} />
                    </Grid>
                </Grid>
            }
        </Card>


    )
}

//el comonente envuelto en withrouter para que se puedan hacer redirecciones mediante history
export default TodoCard
