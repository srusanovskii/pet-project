import styled from "styled-components";
import React from "react";
import EditTodo from "./EditTodo";

const FormDiv = styled.form`
  display: flex;
  justify-content: center;
`

export const Modal = (prop) => {
    return (
        <>{prop.showModal ?
            <FormDiv>
            <div>
                <EditTodo editTask={prop.editTask} todo={prop.editItem}></EditTodo>
            </div>
        </FormDiv>: null}</>
    )
}