//setup data layer
//we need this to track the basket
//its like creating a global variable that can be passed around in react app.
//instead of passing props from grandparents to child, and so on.
import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext)