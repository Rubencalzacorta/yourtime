//import useState to use hooks
import React, { useState, useEffect } from "react"

import "./home.css"

import { setLoggedUser } from "../../redux/actions/search"
import { setUserTodoList } from "../../redux/actions/search"

import { useDispatch, useSelector } from "react-redux"

import { loggedUser } from "../../redux/selectors/index"

import AuthServices from "../../Services/auth.services"
import UserServices from "../../Services/user.services"

import SignupModal from "../../components/Modals/SignupModal"
import LoginModal from "../../components/Modals/LoginModal"

export default ({ history }) => {

	const dispatch = useDispatch()

	const User = useSelector(state => loggedUser(state))

	const [userFetched, setUserFetched] = useState(false)

	const authServices = new AuthServices()
	const userServices = new UserServices()

	useEffect(() => {

		//if the user is already logged goes directly to the todos endpoint and set the user on the store
		if (!User && !userFetched) {
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

	//modal toogles
	const [showLoginModal, setShowLoginModal] = useState(false)
	const [showSignupModal, setShowSignupModal] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

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

	const handleLoginSubmit = e => {
		e.preventDefault()
		authServices.login({ username: user.username, password: user.password })
			.then(user => {

				if (user.status === "failed") {
					setErrorMessage(user.message)
					console.log("pasa por failes")

					return
				} else {
					userServices.getUser()
						.then(gotUser => {
							dispatch(setLoggedUser({ gotUser }))
							dispatch(setUserTodoList({ todos: gotUser.todos }))
							toggleLogin()
							history.push("/todos")
						})
				}
			})
			.catch(err => console.log("RC error login in", err))
	}

	const handleSignupSubmit = e => {
		e.preventDefault()
		authServices.signup({ username: user.username, password: user.password })
			.then(user => {
				//checking if signup was succesfull
				if (user.status === "failed") {
					setErrorMessage(user.message)

				} else {
					toggleLogin()
					history.push("/todos")

				}
			})
			.catch(err => console.log("RC error login in", err))
	}


	return (
		<main className="home-container centered-items">
			<div className="buttons-container centered-items">
				<button className="link" onClick={toggleSignup} >Signup</button>
				<div className="centered-text">
					<h1>to doing</h1>
					<p>Timed to do list</p>
				</div>
				<button className="button" onClick={toggleLogin} >Login</button>

			</div>

			<LoginModal showLoginModal={showLoginModal} toggleLogin={toggleLogin} handleChange={handleChange} handleLoginSubmit={handleLoginSubmit} errorMessage={errorMessage} />

			<SignupModal showSignupModal={showSignupModal} toggleSignup={toggleSignup} handleChange={handleChange} handleSignupSubmit={handleSignupSubmit} errorMessage={errorMessage} />

		</main>


	)
}