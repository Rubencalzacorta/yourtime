import { get } from "lodash"

import {
    SET_USER_TODO_LIST
} from "../../consts/actionTypes"

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_TODO_LIST:
            return { ...state, todoList: action.payload.todos }
            break;
        default:
            return { ...state }
    }
}