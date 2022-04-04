import React from "react";
import EditTodo from "./EditTodo";
import {FormDiv} from "../atoms/Divs";
import {Todo} from "../atoms/Todo";

type Props = {
    editTask(newTodoItem: Todo): void;
    showModal: boolean;
    editItem: Todo;
}

export const EditTodoModal = (props: Props) => {
    const {editTask, showModal, editItem} = props
    return(
        <>{showModal ?
            <FormDiv>
            <div>
                <EditTodo editTask={editTask} todo={editItem}></EditTodo>
            </div>
        </FormDiv>: null}</>
    )
}