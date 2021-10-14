import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isAuthenticated: localStorage.getItem('token')
};

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

export default createReducer(INITIAL_STATE, {
    [login.type]: (state) => ({...state, isAuthenticated : true}),
    [logout.type]: (state) => ({...state, isAuthenticated : false}),
});