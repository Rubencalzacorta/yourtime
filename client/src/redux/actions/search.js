import {
    SET_LOGGED_USER,
    SET_USER_TODO_LIST,
    UPDATE_DOING,
} from "../../consts/actionTypes"


export const setLoggedUser = payload => ({
    type: SET_LOGGED_USER,
    payload,
})

export const setUserTodoList = payload => ({
    type: SET_USER_TODO_LIST,
    payload,
})

export const updateDoing = payload => ({
    type: UPDATE_DOING,
    payload,
})

