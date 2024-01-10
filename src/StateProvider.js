import React, { createContext, useContext, useReducer } from "react";


// preparing the data layer
export const StateContext = createContext();


// it is higher order component and here {children} is reffering to app
export const StateProvider = ({ children, initialState, reducer }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);


// this is a hook which allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);

