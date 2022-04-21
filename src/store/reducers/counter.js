import {
    ADD_BOOKMARK,
    REMOVE_BOOKMARK,
} from "../actions/counterActions";
import {getSessionStorage, setSessionStorage} from "../../assets/helpers/helpers";

// ESTADO INICIAL
const initialState = {
    bookmark: getSessionStorage() || [],
    title: ""
};

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                counter: state.bookmark.push(action.payload),
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
