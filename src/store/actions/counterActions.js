export const CHECK_BOOKMARK = "CHECK_BOOKMARK";
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const checkBookmark = (data) => ({
    type: CHECK_BOOKMARK,
    payload: data
});

export const addToBookmark = (data) => ({
    type: ADD_BOOKMARK,
    payload: data
});

export const deleteBookmark = (data) => ({
    type: REMOVE_BOOKMARK,
    payload: data
});
