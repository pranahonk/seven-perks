export const SET_COUNTER = "SET_COUNTER";
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const setCounter = counter => ({
    type: SET_COUNTER,
    payload: counter
});

export const addToBookmark = (data) => ({
    type: ADD_BOOKMARK,
    payload: data
});

export const deleteBookmark = (data) => ({
    type: REMOVE_BOOKMARK,
    payload: data
});
