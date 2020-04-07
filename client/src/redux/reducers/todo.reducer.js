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

            const newTodo = [...state.todoList]
            const updatedTodo = newTodo[idx]
            updatedTodo.time = time
            newTodo.splice(idx, 1, updatedTodo)

            return { ...state, todoList: newTodo }

            break;
        default:
            return { ...state }
    }
}