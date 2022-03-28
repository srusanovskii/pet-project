import React, {useEffect} from 'react';
import {useState} from "react";
import {Button} from "../atoms/Buttons";
import {Description, Topic} from "../atoms/Inputs";
import {FormDiv} from "../atoms/Divs";

const EditTodo = ({editTask, todo}) => {
    const [editTopicInput, setEditTopicInput] = useState("")
    const [editDescriptionInput, setEditDescriptionInput] = useState("")
    useEffect(()=>{
        setEditTopicInput(todo?.taskTopic)
        setEditDescriptionInput(todo?.taskDescription)
    },[todo])

    const handleChangeTopic = (e) => {
        setEditTopicInput(e.currentTarget.value)
    }
    const handleChangeDescription = (e) => {
        setEditDescriptionInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newObj = {...todo, taskTopic: editTopicInput, taskDescription: editDescriptionInput}

        editTask(newObj)
        setEditTopicInput("")
        setEditDescriptionInput("")
    }

    return (
        <FormDiv>
            <Topic
                value={editTopicInput}
                placeholder="Новый заголовок"
                type="text"
                onChange={handleChangeTopic}
            />
            <Description
                placeholder="Новый текст"
                value={editDescriptionInput}
                type="text"
                onChange={handleChangeDescription}
            />
            <Button onClick={handleSubmit} type="submit">Изменить</Button>
        </FormDiv>
    );
};
export default EditTodo;