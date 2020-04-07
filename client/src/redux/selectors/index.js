import { get } from "lodash"

export const loggedUser = state => get(state, "authReducers.loggedUser")

export const todoList = state => get(state, "todoReducers.todoList")
