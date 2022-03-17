import styled from "styled-components";
import {useState} from "react";
import {Modal} from "./modal";

const FormDiv = styled.form`
  display: flex;
  justify-content: center;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #ffffff;
  border: none;
  border-radius: 3px;
  color: black;
  width: 1000px;
`;
const Description = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #ffffff;
  border: none;
  border-radius: 3px;
  width: 600px;
`;

function ToDo({todo, removeTask, index, toggleModal,}) {

    return (
        <FormDiv>
        <StyledDiv>
            <h4>{index + 1}</h4>
            <div>
                {todo.task}
            </div>
            <div>
                {todo.task2}
            </div>
            <input type="checkbox"/>
            <div onClick={() => removeTask(todo.id)}>
                X
            </div>
            <div>
            <div onClick={toggleModal}>redactor</div>

            </div>
        </StyledDiv>
        </FormDiv>
    )
}

export default ToDo