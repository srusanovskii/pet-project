import React from 'react';
import {useState} from "react";
import {Description, Topic} from "../atoms/Inputs";
import {Button} from "../atoms/Buttons";
import {FormDiv} from "../atoms/Divs";

const Form = ({addTask}) => {
    const [TopicInput, setTopicInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")

    const handleChangeTopic = (e) => {
        setTopicInput(e.currentTarget.value)
    }
    const handleChangeDescription = (e) => {
        setDescriptionInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(TopicInput, descriptionInput)
        setTopicInput("")
        setDescriptionInput("")
    }
    return (
        <FormDiv onSubmit={handleSubmit}>
            <Topic
                value={TopicInput}
                placeholder="Заголовок"
                type="text"
                onChange={handleChangeTopic}
            />
            <Description
                placeholder="Текст"
                value={descriptionInput}
                type="text"
                onChange={handleChangeDescription}
            />
            <Button type="submit">Добавить</Button>
        </FormDiv>
    );
};


export default Form;