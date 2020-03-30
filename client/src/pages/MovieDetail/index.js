import React, { useEffect } from "react"

import { Container, CircularProgress, Typography } from "@material-ui/core"

import { useDispatch, useSelector } from "react-redux"

import { searchMovieById } from "../../redux/actions/search"
import { movieResult as movieResultSelector } from "../../redux/selectors"

//match pasa dentro de props en todos los componentes que son descendientes de una ruta
export default ({ match }) => {
    const dispatch = useDispatch()
    const movieResult = useSelector(state => movieResultSelector(state))

    console.log(movieResult)


    const movieId = match.params.id
    //use effect funciona como el component did mount 
    useEffect(() => {

        //si movie result no exite(osea que es la primera busqueda) o, si existe pero es distina al nuevo movieID (una segunda busqueda)
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) {
            dispatch(searchMovieById({ movieId }))
        }

    })

    if (!movieResult) {
        return <CircularProgress size={50} color="primary" />
    }

    return (
        <Container>
            <Typography variant="h3">{movieResult.Title}</Typography>
            <img src={movieResult.Poster} alt={movieResult.title} />
            <Typography><strong>Actors: </strong> {movieResult.Actors}</Typography>
            <Typography><strong>Director: </strong> {movieResult.Director}</Typography>
            <Typography><strong>Country: </strong> {movieResult.Country}</Typography>
            <Typography><strong>Rated: </strong> {movieResult.Rated}</Typography>
            <Typography><strong>Prices: </strong> {movieResult.Prices}</Typography>
            <Typography><strong>Plot: </strong> {movieResult.Plot}</Typography>
        </Container>

    )

}