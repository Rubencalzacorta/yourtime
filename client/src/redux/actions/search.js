import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_BY_ID_START,
    SET_LOGGED_USER,
    SET_USER_TODO_LIST
} from "../../consts/actionTypes"

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload,
})

export const searchMovieById = payload => ({
    type: SEARCH_MOVIE_BY_ID_START,
    payload,
})

export const setLoggedUser = payload => ({
    type: SET_LOGGED_USER,
    payload,
})

export const setUserTodoList = payload => ({
    type: SET_USER_TODO_LIST,
    payload,
})

