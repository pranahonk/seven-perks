import {ADD_BOOKMARK, REMOVE_BOOKMARK, SEARCH_INDEX, SET_SEARCH_RESULT} from "../actions/counterActions";
import {getSessionStorage} from "../../assets/helpers/helpers";

// ESTADO INICIAL
const initialState = {
    bookmark: getSessionStorage('bookmark') || [],
    title: "",
    search: "",
    searchResult: getSessionStorage('search_result') || []
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
        case SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload
            }
        default:
            return state;
    }
};
