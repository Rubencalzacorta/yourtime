import React from "react"

import { Card, Grid, Typography, Button } from "@material-ui/core"
import style from "./style"

//high order componente para poder hacer rutas donde quieras. Ahora se puede extraer history de los props
import { withRouter } from "react-router-dom"

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {

    const classes = style()

    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`)
    }


    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titleContainer}>

                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>See Details</Button>

                </Grid>

            </Grid>

        </Card>


    )
}

//el comonente envuelto en withrouter para que se puedan hacer redirecciones mediante history
export default withRouter(MovieResult)
