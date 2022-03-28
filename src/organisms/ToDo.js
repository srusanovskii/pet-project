import {EditButton} from "../atoms/Buttons";
import {EditDescription, EditTopic} from "../atoms/Inputs";
import {FormDiv, StyledDiv} from "../atoms/Divs";

function ToDo({todo, removeTask, index, toggleModal, editTask}) {
    return (
        <FormDiv>
        <StyledDiv background={()=> todo.complete? "white" : "green"}
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