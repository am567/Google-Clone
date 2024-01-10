// in this initial state the data is going to live you type elon musk so it will be save in this 
export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        default:
            return state;
    }
};


export default reducer;


