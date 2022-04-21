import {
    ADD_BOOKMARK,
    REMOVE_BOOKMARK,
} from "../actions/counterActions";

// ESTADO INICIAL
const initialState = {
    bookmark: [],
    title: ""
};

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                counter: state.bookmark.push(action.payload)
            };
        case REMOVE_BOOKMARK:
            return {
                ...state,
                counter: state.bookmark.splice(action.payload, 1)
            };
        default:
            return state;
    }
};
