export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const SEARCH_INDEX = "SEARCH_INDEX"
export const SET_SEARCH_RESULT = "SET_SEARCH_RESULT"


export const addToBookmark = (data) => ({
    type: ADD_BOOKMARK,
    payload: data,
});

export const deleteBookmark = (data) => ({
    type: REMOVE_BOOKMARK,
    payload: data
});

export const searchIndex = (data) => ({
    type: SEARCH_INDEX,
    payload: data

})


export const setSearchResult = (data) => ({
    type: SET_SEARCH_RESULT,
    payload: data
})
