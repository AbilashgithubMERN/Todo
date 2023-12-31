import { ADD_NEW_TODO, CLEAR_EDIT, DELETE_TODO, EDIT_EXISTING, GET_ALL_TODOS, GET_EDIT_TODO, HANDLE_ERRORS, MAK_REQ } from "./ActionType";

export const initialState = {
    isLoading: false,
    todoList: [{
        "id": 1,
        "desc": "hello"
    }],
    todoObject: "",
    errormessage: ''
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAK_REQ:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_TODOS:
            return {
                ...state,
                isLoading: false,
                todoList: action.payload
            }
        case HANDLE_ERRORS:
            return {
                ...state,
                isLoading: false,
                todoList: [],
                errormessage: action.payload
            }
        case ADD_NEW_TODO:
            const _inputdata = { ...action.payload }
            const maxId = Math.max(...state.todoList.map(o => o.id))
            var getId = 0;
            if (maxId > 0)
                getId = maxId;

            _inputdata.id = getId + 1;
            return {
                ...state,
                todoList: [...state.todoList, _inputdata]
            }
        case EDIT_EXISTING:
            const _editedRow = { ...action.payload }
            const _editedData = state.todoList.map((item) => {
                return item.id === _editedRow.id ? _editedRow : item
            })
            return {
                ...state,
                todoList: _editedData
            }
        case GET_EDIT_TODO:
            const _getOneRow = action.payload;
            const _getEditRow = state.todoList.filter((item, index) => {
                if (item.id === _getOneRow) {
                    return item.desc;
                }
            })

            return {
                ...state,
                todoObject: _getEditRow[0].desc
            }
        case CLEAR_EDIT:
            return {
                ...state,
                todoObject: ""
            }
        case DELETE_TODO:
            const code = action.payload;
            const remainingTodo = state.todoList.filter((item) => {
                return item.id !== code
            })
            return {
                ...state,
                todoList: remainingTodo
            }
        default: return state;
    }
}

export default todoReducer;