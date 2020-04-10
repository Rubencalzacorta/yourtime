import {
    SET_LOGGED_USER
} from "../../consts/actionTypes"

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_USER:
            return { ...state, loggedUser: action.payload.user }
            break;
        default:
            return { ...state }
    }
}