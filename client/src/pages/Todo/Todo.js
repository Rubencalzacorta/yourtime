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

import "./Todo.css"

import { setLoggedUser, setUserTodoList } from "../../redux/actions/search"

import { useDispatch, useSelector } from "react-redux"

import { loggedUser } from "../../redux/selectors/index"
import { todoList } from "../../redux/selectors/index"

import styles from "./style"

import TodoServices from "../../Services/todo.services"
import UserServices from "../../Services/user.services"
import AuthServices from "../../Services/auth.services"

import TodoCard from "../../components/TodoCard/TodoCard"
import NavBar from "../../components/Navbar/Navbar"
import NewTodoModal from "../../components/Modals/NewTodoModal"

const category = ['Work', 'Study', "Personal Project", "Workout", "Fun", "Reading"]

export default ({ history }) => {

    const todoServices = new TodoServices()
    const userServices = new UserServices()
    const authServices = new AuthServices()

    const dispatch = useDispatch()

    const classes = styles()

    const [showTodoModal, setShowTodoModal] = useState(false)

    let User = useSelector(state => loggedUser(state))
    let TodoList = useSelector(state => todoList(state))


    //if a user tries to reachto reach this endpoint, this will fetch the info and set the store, if not, redirects to home
    useEffect(() => {

        if (!User) {
            authServices.loggedin()
                .then(() => userServices.getUser())
                .then(user => {
                    dispatch(setLoggedUser({ user }))
                    dispatch(setUserTodoList({ todos: user.todos }))
                })
                .catch(err => {
                    console.log("RC error checking user in todos", err)
                    history.push("/")
                })
        }

    })


    const [newTodo, setNewTodo] = useState({
        creator: User ? User._id : undefined,
        name: "",
        category: "",
        time: 0,
        status: 'Todo',
        beginningDate: null,
        endDate: null
    })

    const resetNewTodo = () => setNewTodo({
        creator: User ? User._id : undefined,
        name: "",
        category: "",
        time: 0,
        status: 'Todo',
        beginningDate: null,
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
            return TodoList.map((elm, idx) => elm.status === status && <TodoCard key={idx} {...elm} idx={idx} />)
        } else {
            return <CircularProgress size={50} color="primary" />
        }

    }

    const logOut = () => {
        authServices.logout()
        history.push("/")
    }



    return (
        <>

            <NavBar toggleAddTodo={toggleAddTodo} logOut={logOut} />
            <Grid container className={classes.container}>


                <Grid className={classes.todoWrapper} xs={12} sm={3} >
                    {renderTodos("Doing")}
                </Grid>

                <Grid className={classes.todoWrapper} xs={12} sm={3} >
                    {renderTodos("Todo")}
                </Grid>

                <Grid className={classes.todoWrapper} xs={12} sm={3}>
                    {renderTodos("Done")}
                </Grid>

                <NewTodoModal showTodoModal={showTodoModal} toggleAddTodo={toggleAddTodo} handleChange={handleChange} handleAddTodoSubmit={handleAddTodoSubmit} newTodo={newTodo} category={category} />


            </Grid>
        </>


    )
}