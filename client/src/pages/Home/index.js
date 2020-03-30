//import useState to use hooks
import React, { useState } from "react"

import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core"

import styles from "./style"

import { MovieIcon } from "../../icons"

export default (props) => {
	console.log(props)
	//inciamos el hook use state para usar estados dentro de componentes funcionales
	//using object decontrustion we separate searchtext (the value of the state, in this case an empty string) and setSearchText (callback funcion used to set the new value of the state)
	const [searchText, setSearchText] = useState("")

	const classes = styles()

	const handleSearchTextChange = e => {
		setSearchText(e.target.value)
	}

	const handleCleanTextClick = e => {
		setSearchText("")
	}
	const handleSearchTextClick = e => {
		props.history.push(`/results?movieName=${searchText}`)
	}
	return (
		<Container className={classes.container}>

			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer} >
					<Grid>
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder="Buscar..."
					className={classes.textFieldSearch}
					onChange={handleSearchTextChange}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleCleanTextClick} >clean</Button>
					<Button variant="contained" className={classes.searchButton} color="primary" onClick={handleSearchTextClick} > search</Button>
				</Grid>

			</Card>

		</Container>


	)
}