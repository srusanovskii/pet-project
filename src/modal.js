import styled from "styled-components";
import React from "react";
import Form from "./Form";
import EditTodo from "./EditTodo";

const FormDiv = styled.form`
  display: flex;
  justify-content: center;
`
const ModalWrapper = styled.div`
  //display: flex;
  //justify-content: center;
  //font-size: 18px;
  //padding: 10px;
  //margin: 10px;
  //background: #ffffff;
  //border: none;
  //border-radius: 3px;
  //color: black;
  //width: 1000px;
    
`


export const Modal = (prop) => {
    return (
        // <>{prop.showModal ? <div>modal</div> : null}</>
        <>{prop.showModal ?
            <FormDiv>
            <ModalWrapper>
                <EditTodo editTask={() => prop.editTask()}></EditTodo>
            </ModalWrapper>
        </FormDiv>: null}</>
    )
}