import { createSlice } from "@reduxjs/toolkit"

const defaultState = {
    loginUser: "",
    myDecisions: [],
    myRequests: [],
    empDetails: []
}

const firstSlice = createSlice({
    name: "firstSlice",
    initialState: defaultState,
    reducers: {
        setLoginUser: (state, {payload}) => {
            console.log("setLoginUser called", state)
            state.loginUser = payload
        },
        loadMyDecisions: (state, { payload }) => {
            state.myDecisions = payload
        },
        loadMyRequests: (state, { payload }) => {
            state.myRequests = payload
        },
        loadEmployeeDetails: (state, { payload }) => {
            state.empDetails = payload
        }
    }
})

export default firstSlice.reducer;
export const actions = firstSlice.actions

//Selectors functions to fetch data from store

export const getMyDecisions = (state) => state.vnovus.myDecisions

export const getLoginUser = (state) => state.vnovus.loginUser

