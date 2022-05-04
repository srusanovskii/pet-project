import {EditButton} from "../atoms/Buttons"
import {EditDescription, EditTopic} from "../atoms/Inputs"
import {FormDiv, StyledDiv} from "../atoms/Divs"
import React from "react"
import {Todo} from "../atoms/Todo"
import { delAction } from "./../store";
import { useAction } from '@reatom/react';

type Props = {
    todo: Todo;
    index: number;
    toggleModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo): void;
}

function ToDo(props: Props) {
    const {todo, index, toggleModal} = props

    const delTodo = useAction(() => {
        return delAction(todo)
    })

    return (
        <FormDiv>
        <StyledDiv 
            background={todo.complete? "white" : "green"}
            // onClick={() => todoListAtom.edit.dispatch({...todo, complete : !todo.complete})}
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
                    : <EditButton type="submit" onClick={(e) => toggleModal(e, todo)}>Редактровать</EditButton>
                }
            </div>
            <EditButton type="submit" onClick={delTodo}>
                Удалить
            </EditButton>
        </StyledDiv>
        </FormDiv>
    )
}

export default ToDo