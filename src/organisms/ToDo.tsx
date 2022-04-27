import {EditButton} from "../atoms/Buttons"
import {EditDescription, EditTopic} from "../atoms/Inputs"
import {FormDiv, StyledDiv} from "../atoms/Divs"
import React from "react"
import {Todo} from "../atoms/Todo"
import { todoListAtom } from "./../store";

type Props = {
    todo: Todo;
    index: number;
    toggleModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo): void;
}

function ToDo(props: Props) {
    const {todo, index, toggleModal} = props

    return (
        <FormDiv>
        <StyledDiv 
            background={todo.complete? "white" : "green"}
            onClick={() => todoListAtom.edit.dispatch({...todo, complete : !todo.complete})}
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
            <EditButton type="submit" onClick={(e) => todoListAtom.delete.dispatch(todo)}>
                Удалить
            </EditButton>
        </StyledDiv>
        </FormDiv>
    )
}

export default ToDo