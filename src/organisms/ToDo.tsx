import {useContext} from "react"
import {EditButton} from "../atoms/Buttons"
import {EditDescription, EditTopic} from "../atoms/Inputs"
import {FormDiv, StyledDiv} from "../atoms/Divs"
import React from "react"
import {Todo} from "../atoms/Todo"

import { TodoListContext } from "./../pages/App";

type Props = {
    todo: Todo;
    index: number;
    toggleModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo): void;
}

function ToDo(props: Props) {
    const {todo, index, toggleModal} = props

    const {todoList, setTodoList} = useContext(TodoListContext);

    const editTodo = (newTodo: Todo): Todo[] => {
        const editedTodoList = todoList.map((todo) =>
            todo.id === newTodo.id ? newTodo : todo
        )
        return editedTodoList;
    }

    const removeTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        e.preventDefault()
        e.stopPropagation()
        setTodoList([...todoList.filter((todo) => todo.id !== id)])
    }

    return (
        <FormDiv>
        <StyledDiv 
            background={todo.complete? "white" : "green"}
            onClick={() => setTodoList(editTodo({...todo, complete : !todo.complete}))}
        >
            <h4>{index + 1}</h4>
            <EditTopic>
                {todo.taskTopic}
            </EditTopic>
            <EditDescription>
                {todo.taskDescription}
            </EditDescription>
            <div>
                {todo.complete === false
                    ? <div><h4>Готово</h4></div> 
                    : <EditButton type="submit" onClick={(e)=>toggleModal(e, todo)}>Редактровать</EditButton>
                }
            </div>
            <EditButton type="submit" onClick={(e) => removeTask(e, todo.id)}>
                Удалить
            </EditButton>
        </StyledDiv>
        </FormDiv>
    )
}

export default ToDo