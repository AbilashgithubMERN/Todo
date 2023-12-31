import { combineReducers } from "redux";
import todoReducer from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({todo:todoReducer});
const todoStore = configureStore({reducer:rootReducer,middleWare:[thunk,logger]});

export default todoStore;