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
  border: 2px solid #5dbde7;
  border-radius: 3px;
`;

const Form = ({addTask}) => {
    const [TopicInput, setTopicInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")

    const handleChange = (e) => {
        setTopicInput(e.currentTarget.value)
    }
    const handleChange1 = (e) => {
        setDescriptionInput(e.currentTarget.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(TopicInput, descriptionInput)
        setTopicInput("")
        setDescriptionInput("")
        console.log(descriptionInput, TopicInput)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
        <FormDiv id="FormDivAdd" onSubmit={handleSubmit}>
            <Topic
                value={TopicInput}
                placeholder="Заголовок"
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <Description
                placeholder="Текст"
                value={descriptionInput}
                type="text"
                onChange={handleChange1}
                onKeyDown={handleKeyPress}
            />
            <Button form="FormDivAdd" type="submit">Добавить</Button>
        </FormDiv>
    );
};


export default Form;