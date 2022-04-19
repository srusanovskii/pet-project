import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from "../atoms/Buttons";
import {Description, Topic} from "../atoms/Inputs";
import {FormDiv} from "../atoms/Divs";
import {Todo} from "../atoms/Todo";

import { TodoListContext } from "./../pages/App";

type Props = {
    todo: Todo;
}

type FormInputs = {
    topic: string;
    description: string;
};

const EditTodo = (props: Props) => {
    const {todoList, setTodoList} = useContext(TodoListContext);

    const {todo} = props
    const {register, handleSubmit} = useForm<FormInputs>()

    const editTodo = (newTodo: Todo): Todo[] => {
        const editedTodoList = todoList.map((todo) =>
            todo.id === newTodo.id ? newTodo : todo
        )
        return editedTodoList;
    }

    const onSubmit = (formData: FormInputs) => {
        const editedTodo = {
            ...todo, 
            taskTopic: formData.topic, 
            taskDescription: formData.description
        }
        const editedTodoList = editTodo(editedTodo)
        setTodoList(editedTodoList)
    }

    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <Topic
                placeholder="Новый заголовок"
                type="text"
                {...register('topic')}
            />
            <Description
                placeholder="Новый текст"
                type="text"
                {...register('description')}
            />
            <Button type="submit">Изменить</Button>
        </FormDiv>
    );
};
export default EditTodo;