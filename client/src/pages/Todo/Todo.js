import React, { useState, useEffect } from "react"

import {
    Container, Grid, TextField, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    CircularProgress

} from "@material-ui/core"

import { setLoggedUser, setUserTodoList } from "../../redux/actions/search"

import { useDispatch, useSelector } from "react-redux"

import { loggedUser } from "../../redux/selectors/index"
import { todoList } from "../../redux/selectors/index"

import styles from "./style"

import TodoServices from "../../Services/todo.services"
import UserServices from "../../Services/user.services"

import TodoCard from "../../components/TodoCard/TodoCard"

const category = ['Work', 'Study', "Personal Project", "Workout", "Fun", "Reading"]

export default (props) => {

    const todoServices = new TodoServices()
    const userServices = new UserServices()

    const dispatch = useDispatch()

    const classes = styles()

    const User = useSelector(state => loggedUser(state))
    const TodoList = useSelector(state => todoList(state))

    console.log(User)
    console.log(TodoList)

    const [showTodoModal, setShowTodoModal] = useState(false)

    const [newTodo, setNewTodo] = useState({
        creator: User._id,
        name: "",
        category: "",
        time: 0,
        status: 'Todo',
        beginingDate: null,
        endDate: null
    })

    const resetNewTodo = () => setNewTodo({
        creator: User._id,
        name: "",
        category: "",
        time: 0,
        status: 'Todo',
        beginingDate: null,
        endDate: null
    })

    const toggleAddTodo = e => {
        setShowTodoModal(!showTodoModal)
    }

    const handleChange = e => {
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
    }

    const handleAddTodoSubmit = e => {
        e.preventDefault()
        todoServices.newTodo(newTodo)
            .then(returnedTodo => userServices.addTodo(returnedTodo._id))
            .then(user => {
                dispatch(setLoggedUser({ user }))
                dispatch(setUserTodoList({ todos: user.todos }))
            })
            .catch(err => console.log("RC error creado el todo en el front", err))
            .then(() => {
                resetNewTodo()
                toggleAddTodo()
            })
    }

    const renderTodos = (status) => {
        if (TodoList) {
            return TodoList.map((elm, idx) => elm.status === status && <TodoCard key={idx} {...elm} />)
        } else {
            return <CircularProgress size={50} color="primary" />
        }

    }

    return (
        <Container className={classes.container}>

            <Grid className={classes.buttonsContainer}>
                <Button variant="contained" onClick={toggleAddTodo} >Add Todo</Button>
            </Grid>

            <Grid style={{ backgroundColor: "yellow" }}>
                {renderTodos("Doing")}
            </Grid>

            <Grid style={{ backgroundColor: "green" }} >
                {renderTodos("Todo")}
            </Grid>

            <Grid style={{ backgroundColor: "red" }} >
                {renderTodos("Done")}
            </Grid>


            <Dialog open={showTodoModal} onClose={toggleAddTodo} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New ToDo</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="name"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        name="category"
                        label="Choose a category"
                        select
                        value={newTodo.category}
                        fullWidth
                        onChange={handleChange}

                    >
                        {category.map((e, i) => {
                            return (
                                <MenuItem key={i} value={e}>
                                    {e}
                                </MenuItem>
                            );
                        })}


                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleAddTodo} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleAddTodoSubmit} color="primary">
                        Create
          </Button>
                </DialogActions>
            </Dialog>


        </Container>


    )
}