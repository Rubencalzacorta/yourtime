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

            const id = action.payload._id
            const time = action.payload.time

            const newTodo = [...state.todoList]
            const updatedTodo = newTodo.filter(elm => elm._id === id)[0]

            const objectIndex = newTodo.indexOf(updatedTodo)
            updatedTodo.time = time

            newTodo.splice(objectIndex, 1, updatedTodo)

            return { ...state, todoList: newTodo }
            break;
        default:
            return { ...state }
    }
}