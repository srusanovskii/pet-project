import { EditButton } from "../atoms/Buttons"
import { EditDescription, EditTopic } from "../atoms/Inputs"
import { FormDiv, StyledDiv } from "../atoms/Divs"
import React from "react"
import { Todo } from "../atoms/Todo"
import { delAction, completeAction } from "./../store";
import { useAction } from '@reatom/react';
import { useTranslation } from 'react-i18next';

type Props = {
    todo: Todo;
    index: number;
    toggleModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo): void;
}

function ToDo(props: Props) {
    const { todo, index, toggleModal } = props;
    const { t } = useTranslation('ToDo')

    const completeTodo = useAction((event) => {
        const targetId = (event.target as HTMLElement).id;

        const clickedToEditButton = targetId === 'edit-button';
        if (!clickedToEditButton) {
            return completeAction(todo.id)
        }
    }, [todo])

    const delTodo = useAction(() => {
        return delAction(todo)
    }, [todo])

    return (
        <FormDiv>
        <StyledDiv 

            background={todo.complete ? "white" : "green"}
            onClick={completeTodo}
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
                    ? <div><h4>{t('ready')}</h4></div> 
                    : <EditButton type="submit" onClick={(e) => toggleModal(e, todo)}>{t('edit')}</EditButton>
                }
            </div>
            <EditButton id='edit-button' type="button" onClick={delTodo}>
                {t('delete')}
            </EditButton>
        </StyledDiv>
        </FormDiv>
    )
}

export default ToDo
