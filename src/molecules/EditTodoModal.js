import React from "react";
import EditTodo from "./EditTodo";
import {FormDiv} from "../atoms/Divs";

export const EditTodoModal = (prop) => {
    return (
        <>{prop.showModal ?
            <FormDiv>
            <div>
                <EditTodo editTask={prop.editTask} todo={prop.editItem}></EditTodo>
            </div>
        </FormDiv>: null}</>
    )
}