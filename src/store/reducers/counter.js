import {ADD_BOOKMARK, REMOVE_BOOKMARK, SEARCH_INDEX} from "../actions/counterActions";
import {getSessionStorage} from "../../assets/helpers/helpers";

// ESTADO INICIAL
const initialState = {
    bookmark: getSessionStorage() || [],
    title: "",
    search: ""
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
        case SEARCH_INDEX:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
};
