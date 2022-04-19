import {useContext} from "react"
import {useForm} from 'react-hook-form'
import {Description, Topic} from "../atoms/Inputs"
import {Button} from "../atoms/Buttons"
import {FormDiv} from "../atoms/Divs"
import { Todo } from "../atoms/Todo"

import { TodoListContext } from "./../pages/App"

type FormInputs = {
    topic: string
    description: string
};

const Form = () => {
    const {todoList, setTodoList} = useContext(TodoListContext)
    
    const {register, handleSubmit, reset} = useForm<FormInputs>()

    const addTodo = (topic: string, description: string): Todo[] => {
        const newTodo: Todo = {
            id: Math.random().toString(36).substring(2,9),
            taskTopic: topic,
            taskDescription: description,
            complete: true
        }
        const updatedTodoList = [...todoList, newTodo]
        return updatedTodoList
    }

    const onSubmit = (formData: FormInputs) => {
        if (!formData.topic && !formData.description) {
            return
        }
        const updatedTodoList = addTodo(formData.topic, formData.description)
        setTodoList(updatedTodoList)
        reset()
    }

    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <Topic
                placeholder="Заголовок"
                type="text"
                {...register("topic")}
            />
            <Description
                placeholder="Текст"
                type="text"
                {...register("description")}
            />
            <Button type="submit">Добавить</Button>
        </FormDiv>
    );
};


export default Form;