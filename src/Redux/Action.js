import { ADD_NEW_TODO, CLEAR_EDIT, DELETE_TODO, EDIT_EXISTING, GET_ALL_TODOS, GET_EDIT_TODO, HANDLE_ERRORS, MAK_REQ } from "./ActionType";

export const makeRequest = () => {
    return {
        type: MAK_REQ
    }
}

export const getAllRequestSuccess = (data) => {
    return {
        type : GET_ALL_TODOS ,
        payload: data
    };
}

export const getAllRequestFail = (err) => {
    return { 
        type : HANDLE_ERRORS ,
        payload: err
    }
}

export const addNewTodoaction = (data) => {
    return {
        type : ADD_NEW_TODO ,
        payload: data
    };
}

export const getOneTodoRequest = (data) => {
    return {
        type : GET_EDIT_TODO ,
        payload: data
    };
}
export const editTodoRequest = (data) => {
    return {
        type : EDIT_EXISTING ,
        payload: data
    };
}

export const deleteTodoRequest = (code) => {
    return {
        type : DELETE_TODO ,
        payload: code
    };
}

export const clearEditRequest = () => {
    return {
        type : CLEAR_EDIT 
    };
}