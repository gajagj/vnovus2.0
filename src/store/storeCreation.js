import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import firstSlice from './reducer'

export const store = configureStore({
    reducer:{
        userName:firstSlice

    }
})