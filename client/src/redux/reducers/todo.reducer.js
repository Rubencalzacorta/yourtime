import { get } from "lodash"

import {
    SET_USER_TODO_LIST, UPDATE_DOING
} from "../../consts/actionTypes"

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_TODO_LIST:
            return { ...state, todoList: action.payload.todos }
            break;
        case UPDATE_DOING:

            const idx = action.payload.idx
            const time = action.payload.time
            const updatedTodo = state.todoList[idx]
            updatedTodo.time = time

            const todoList = [...state.todoList]

            todoList.splice(idx, 1, updatedTodo)
            console.log(todoList)

            return { ...state, todoList }
            break;
        default:
            return { ...state }
    }
}