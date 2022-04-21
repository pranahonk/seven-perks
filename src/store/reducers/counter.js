import {
    ADD_BOOKMARK,
    REMOVE_BOOKMARK,
    SET_COUNTER
} from "../actions/counterActions";

// ESTADO INICIAL
const initialState = {
    bookmark: [],
    title: ""
};

export const counter = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_COUNTER:
            return {
                ...state,
                bookmark: action.payload
            };
        case ADD_BOOKMARK:
            return {
                ...state,
                count: state.bookmark.push(action.payload)
            };
        case REMOVE_BOOKMARK:
            return {
                ...state,
                count: state.bookmark.splice(action.payload, 1)
            };
        default:
            return state;
    }
};
