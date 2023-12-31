import axios from "axios";
import  { makeRequest,getAllRequestFail, getAllRequestSuccess, addNewTodoaction, getOneTodoRequest, editTodoRequest, deleteTodoRequest, clearEditRequest } from "./Action";

const GetAllToDos = () => {

}

export const addNewTodotoList = (data)=>{
    return ( dispatch )=>{
        dispatch(addNewTodoaction(data));
    };
}

export const GetOneToDo = (id) => {
    return ( dispatch )=>{
        dispatch(getOneTodoRequest(id));
    };
}
export const EditTodo= (data) => {
    return ( dispatch )=>{
        dispatch(editTodoRequest(data));
    };
}

export const DeleteToDo = (id) => {
    return ( dispatch )=>{
        dispatch(deleteTodoRequest(id));
    };
}

export const ClearEdit = () => {
    return (dispatch) => {
        dispatch(clearEditRequest);
    }
}
export default GetAllToDos;