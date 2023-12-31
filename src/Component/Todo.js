import { useEffect, useState } from "react";
import GetAllToDos, { ClearEdit, DeleteToDo, EditTodo, GetOneToDo, addNewTodotoList } from "../Redux/ActionCreator";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Todo = (props) => {
    const [desc, descChange] = useState("");
    const [id, idChange] = useState(0);
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();

    const editObj = useSelector((state) => state.todo.todoObject);

    useEffect(() => {
        if (Object.keys(editObj).length > 0) {
            descChange(editObj);
        }
        else {
            idChange(0);
            descChange("");
        }
    }, [editObj])

    const addNewTodo = () => {
        if (desc != "") {
            const obj = { id, desc };
            if (isEdit) {
                dispatch(EditTodo(obj));
                setIsEdit(false);
            }
            else
                dispatch(addNewTodotoList(obj));
        }
        else
            console.log("null");
        dialogClose();
    }

    const dialogClose = () => {
        descChange("");
        idChange(0);
        setOpen(false);
        setIsEdit(false);
        ClearEdit();
    }

    const handleEdit = (id1) => {
        setOpen(true);
        dispatch(GetOneToDo(id1));
        idChange(id1);
        setIsEdit(true);
        if(editObj)
             descChange(editObj);
    }

    const handleDelete = (id1) => {
        dispatch(DeleteToDo(id1));
    }
    return (
        <div className="container">
            <h1>Todo Application (React Redux)</h1>
            <h2>Add your Work list below!!</h2>
            <Button onClick={() => setOpen(true)} variant="contained">ADD +</Button>
            <br></br>
            <Container fluid className="parent-block">
                <Row xs={1} md={1} className="my-block">
                    {props.todoState.todoList.map((row, i) => {
                        return (
                            <Col key={row.id} md={10} className="col-span">
                                <div>&nbsp;{row.desc}</div>&nbsp;&nbsp;
                                <div className="todo-buttons">
                                    <FaEdit className="todo-icon" onClick={e => { handleEdit(row.id) }}>Edit</FaEdit>&nbsp;&nbsp;
                                    <MdDelete className="todo-icon" onClick={e => { handleDelete(row.id) }} style={{ backgroundColor: 'red' }}>DELETE</MdDelete>&nbsp;
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            <Dialog open={open} onClose={() => { setOpen(true) }} fullWidth maxWidth="sm" className="todo-dialog">
                <DialogTitle style={{ backgroundColor: "rgb(129, 67, 255)" }}>
                    <span>{isEdit ? <b>Edit Todo!</b> : <b>Add a New Todo!</b>}</span><br></br><br></br>
                    <Button onClick={dialogClose} variant="contained"> CLOSE X</Button>
                    <br></br><br></br>
                    <TextField className="text-style" value={desc} onChange={e => descChange(e.target.value)}></TextField><br></br><br></br>
                    <Button onClick={addNewTodo} variant="contained"> SUBMIT</Button>
                </DialogTitle>
            </Dialog>
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        todoState: state.todo
    }
}


export default connect(mapStatetoProps)(Todo);