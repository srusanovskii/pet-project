import React, {useEffect} from 'react';
import {useState} from "react";
import {Button} from "../atoms/Buttons";
import {Description, Topic} from "../atoms/Inputs";
import {FormDiv} from "../atoms/Divs";
import {Todo} from "../atoms/Todo";

type Props = {
    editTask(newTodoItem: Todo): void;
    todo: Todo;
}

const EditTodo = (props: Props) => {
    const {editTask, todo} = props
    const [editTopicInput, setEditTopicInput] = useState("")
    const [editDescriptionInput, setEditDescriptionInput] = useState("")
    useEffect(()=>{
        setEditTopicInput(todo?.taskTopic)
        setEditDescriptionInput(todo?.taskDescription)
    },[todo])

    const handleChangeTopic = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTopicInput(e.currentTarget.value)
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditDescriptionInput(e.currentTarget.value)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
                onChange={(e)=>handleChangeTopic(e)}
            />
            <Description
                placeholder="Новый текст"
                value={editDescriptionInput}
                type="text"
                onChange={(e)=>handleChangeDescription(e)}
            />
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Изменить</Button>
        </FormDiv>
    );
};
export default EditTodo;