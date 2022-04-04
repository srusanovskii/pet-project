import React from 'react';
import {useState} from "react";
import {Description, Topic} from "../atoms/Inputs";
import {Button} from "../atoms/Buttons";
import {FormDiv} from "../atoms/Divs";

type Props = {
    addTask(topic: string, description: string): void;
}

const Form = (props: Props) => {
    const {addTask} = props
    const [TopicInput, setTopicInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")

    const handleChangeTopic = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopicInput(e.currentTarget.value)
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionInput(e.currentTarget.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTask(TopicInput, descriptionInput)
        setTopicInput("")
        setDescriptionInput("")
    }
    return (
        <FormDiv onSubmit={(e)=>handleSubmit(e)}>
            <Topic
                value={TopicInput}
                placeholder="Заголовок"
                type="text"
                onChange={(e)=>handleChangeTopic(e)}
            />
            <Description
                placeholder="Текст"
                value={descriptionInput}
                type="text"
                onChange={(e)=>handleChangeDescription(e)}
            />
            <Button type="submit">Добавить</Button>
        </FormDiv>
    );
};


export default Form;