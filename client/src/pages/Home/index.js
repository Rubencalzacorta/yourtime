//import useState to use hooks
import React, { useState } from "react"

import {
	Container, Typography, Card, Grid, TextField, Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,


} from "@material-ui/core"

import styles from "./style"

export default (props) => {

	const classes = styles()


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

	const handleSubmit = e => {
		e.preventDefault()

	}




	return (
		<Container className={classes.container}>


			<Grid className={classes.buttonsContainer}>
				<Button variant="contained" onClick={toggleLogin} >Login</Button>
				<Button variant="contained" onClick={toggleSignup} >Signup</Button>
			</Grid>


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
					<Button onClick={toggleLogin} color="primary">
						Login
          </Button>
				</DialogActions>
			</Dialog>
		</Container>


	)
}