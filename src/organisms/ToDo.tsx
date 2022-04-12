import {EditButton} from "../atoms/Buttons";
import {EditDescription, EditTopic} from "../atoms/Inputs";
import {FormDiv, StyledDiv} from "../atoms/Divs";
import React from "react";
import {Todo} from "../atoms/Todo";

type Props = {
    todo: Todo;
    removeTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string): void;
    index: number;
    toggleModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo): void;
    editTask(newTodoItem: Todo): void
}

function ToDo(props: Props) {
    const {todo, removeTask, index, toggleModal, editTask} = props
    return (
        <FormDiv>
        <StyledDiv background={todo.complete? "white" : "green"}
                   onClick={()=> editTask({...todo, complete : !todo.complete})}
        >
            <h4>{index + 1}</h4>
            <EditTopic>
                {todo.taskTopic}
            </EditTopic>
            <EditDescription>
                {todo.taskDescription}
            </EditDescription>
            <div>
                {todo.complete === false? <div><h4>Готово</h4></div> :
                    <EditButton type="submit" onClick={(e)=>toggleModal(e, todo)}>Редактровать</EditButton>
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