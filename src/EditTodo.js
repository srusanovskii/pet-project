import React from 'react';
import styled from "styled-components";
import {useState} from "react";

const Topic = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #ffffff;
  border: none;
  border-radius: 3px;
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
const FormDiv = styled.form`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  background: #ffffff;
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const EditTodo = ({editTask}) => {
    const [editTopicInput, setEditTopicInput] = useState("")
    const [editDescriptionInput, setEditDescriptionInput] = useState("")

    const handleChange = (e) => {
        setEditTopicInput(e.currentTarget.value)
    }
    const handleChange1 = (e) => {
        setEditDescriptionInput(e.currentTarget.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(editTopicInput, editDescriptionInput)
        setEditTopicInput("")
        setEditDescriptionInput("")
        console.log(setEditDescriptionInput, editTopicInput)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
        <FormDiv id="FormDiv1" onSubmit={handleSubmit}>
            <Topic
                value={editTopicInput}
                placeholder="Новый заголовок"
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <Description
                placeholder="Новый текст"
                value={editDescriptionInput}
                type="text"
                onChange={handleChange1}
                onKeyDown={handleKeyPress}
            />
            <Button form="FormDiv1" type="submit">Изменить</Button>
        </FormDiv>
    );
};


export default EditTodo;