//import useState to use hooks
import React, { useState, useEffect } from "react"

import {
	Container, Grid, TextField, Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,


} from "@material-ui/core"

import "./home.css"

import { setLoggedUser } from "../../redux/actions/search"
import { setUserTodoList } from "../../redux/actions/search"

import { useDispatch, useSelector } from "react-redux"

import { loggedUser } from "../../redux/selectors/index"

import styles from "./style"

import AuthServices from "../../Services/auth.services"
import UserServices from "../../Services/user.services"

export default ({ history }) => {

	const dispatch = useDispatch()

	const classes = styles()

	const User = useSelector(state => loggedUser(state))

	const [userFetched, setUserFetched] = useState(false)

	const authServices = new AuthServices()
	const userServices = new UserServices()

	useEffect(() => {
		//only fires the dispatch accion when there is no movie list and when you have the name of the movie to look for 
		if (!User && !userFetched) {
			console.log("no Hay usuario")
			setUserFetched(true)
			authServices.loggedin()
				.then(user => userServices.getUser())
				.then(user => {
					dispatch(setLoggedUser({ user }))
					dispatch(setUserTodoList({ todos: user.todos }))
					history.push("/todos")
				})
				.catch(err => console.log("error chequeando al usuario", err))

		}
	})


	const [showLoginModal, setShowLoginModal] = useState(false)
	const [showSignupModal, setShowSignupModal] = useState(false)

	const [user, setUser] = useState({
		username: "",
		password: ""
	})


	const toggleLogin = e => {
		setShowLoginModal(!showLoginModal)
	}

	const toggleSignup = e => {
		setShowSignupModal(!showSignupModal)
	}

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleLogout = () => authServices.logout().then(user => console.log("logout succesfull", user))

	const handleLoginSubmit = e => {
		e.preventDefault()
		authServices.login({ username: user.username, password: user.password })
			.then(user => userServices.getUser())
			.then(user => {

				dispatch(setLoggedUser({ user }))
				dispatch(setUserTodoList({ todos: user.todos }))
			})
			.then(() => {
				toggleLogin()
				history.push("/todos")
			})
			.catch(err => console.log("RC error login in", err))
	}

	const handleSignupSubmit = e => {
		e.preventDefault()
		authServices.Signup({ username: user.username, password: user.password })
			.then(user => console.log(user))
			.then(() => {
				toggleLogin()
				history.push("/todos")
			})
			.catch(err => console.log("RC error login in", err))
	}



	return (
		<main className="home-container">


			<div className="buttons-container">
				<button variant="contained" onClick={toggleLogin} >Login</button>

				<h1>To Doing</h1>
				<p>Timed to do list</p>

				<button variant="contained" onClick={toggleSignup} >Signup</button>

			</div>

			{/* <button variant="contained" onClick={handleLogout} >logOut</button> */}

			<Dialog open={showLoginModal} onClose={toggleLogin} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Login</DialogTitle>
				<DialogContent>

					<TextField
						autoFocus
						margin="dense"
						id="username"
						name="username"
						label="Username"
						type="text"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="password"
						name="password"
						label="Password"
						type="password"
						fullWidth
						onChange={handleChange}

					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggleLogin} color="primary">
						Cancel
          </Button>
					<Button onClick={handleLoginSubmit} color="primary">
						Login
          </Button>
				</DialogActions>
			</Dialog>



			<Dialog open={showSignupModal} onClose={toggleSignup} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Signup</DialogTitle>
				<DialogContent>

					<TextField
						autoFocus
						margin="dense"
						id="username"
						name="username"
						label="Username"
						type="text"
						fullWidth
						onChange={handleChange}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="password"
						name="password"
						label="Password"
						type="password"
						fullWidth
						onChange={handleChange}

					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggleSignup} color="primary">
						Cancel
          </Button>
					<Button onClick={handleSignupSubmit} color="primary">
						Signup
          </Button>
				</DialogActions>
			</Dialog>




		</main>


	)
}