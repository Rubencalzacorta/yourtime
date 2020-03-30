import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, CircularProgress } from "@material-ui/core"
//queryString en una dependencia que viene ya instalada que sirve para comvertir querystrings in objetos
import queryString from "query-string"

import { searchMovie } from "../../redux/actions/search"
import MovieResult from "../../components/MovieResult"

//importar selectores
import { movieResults, isSearchLoading } from "../../redux/selectors"
//{location} is a decomposition from the property location fo the object props
export default ({ location }) => {

    //instanciar el dispatch
    const dispatch = useDispatch()
    const movies = useSelector(state => movieResults(state))
    const isLoading = useSelector(state => isSearchLoading(state))
    const [isLooked, setIsLooked] = useState(false)

    console.log(movies)

    //use effect recibe un callback que se va a ejecutar cada vez que se monte el componente - el equivalente a component did mount
    useEffect(() => {
        //queryString.parse crea un objeto de un query estring. el querystring siempre esta en props.location.search
        const { movieName } = queryString.parse(location.search)

        //only fires the dispatch accion when there is no movie list and when you have the name of the movie to look for 
        if (movieName && !isLooked) {
            setIsLooked(true)
            //dispatch se usa para llamar a una accion. en este caso searchMovie que llama a la api
            dispatch(searchMovie({ movieName }))
        }
    })

    const renderMovies = () => {
        if (movies) {
            return movies.map((elm, idx) => <MovieResult key={idx} {...elm} />)
        } else if (isLoading) {
            return <CircularProgress size={100} color="primary" />
        } else {
            return <div />
        }
    }

    return (
        <Container>
            {renderMovies()}
        </Container>
    )

}