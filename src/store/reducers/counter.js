import {
    ADD_BOOKMARK,
    REMOVE_BOOKMARK,
    CHECK_BOOKMARK
} from "../actions/counterActions";

// ESTADO INICIAL
const initialState = {
    bookmark: [],
    title: ""
};

export const counter = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case CHECK_BOOKMARK:
            return {
                ...state,
                bookmark: state.bookmark.findIndex(element => element.id === action.payload.id)
            };
        case ADD_BOOKMARK:
            return {
                ...state,
                bookmark: state.bookmark.push(action.payload)
            };
        case REMOVE_BOOKMARK:
            return {
                ...state,
                bookmark: state.bookmark.splice(action.payload, 1)
            };
        default:
            return state;
    }
};
