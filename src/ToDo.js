import styled from "styled-components";

const FormDiv = styled.form`
  display: flex;
  justify-content: center;
`
const StyledDiv = styled.div`
  display: flex;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: ${props => props.background};
  border: none;
  border-radius: 3px;
  color: black;
  width: 1000px;
`;
const Description = styled.div`
  width: 600px;
  text-align: center;
`
const Topic = styled.div`
    width: 250px;
  text-align: center;
`
const Button = styled.button`
  background: #ffffff;
  color: black;
  border: 2px solid #5dbde7;
  border-radius: 3px;
  margin-left: 5px;
`;

function ToDo({todo, removeTask, index, toggleModal, editTask}) {

    return (
        <FormDiv id="FormDiv2">
        <StyledDiv background={()=> todo.complete? "white" : "green"}
                   onClick={()=> editTask({...todo, complete : !todo.complete})}
        >
            <h4>{index + 1}</h4>
            <Topic>
                {todo.task}
            </Topic>
            <Description>
                {todo.task2}
            </Description>
            <div>
                {todo.complete === false? <div></div> :
                    <Button form="FormDiv2" type="submit" onClick={(e)=>toggleModal(e, todo)}>Редактровать</Button>
                }
            </div>
            <Button type="submit" onClick={(e) => removeTask(e, todo.id)}>
                Удалить
            </Button>
        </StyledDiv>
        </FormDiv>
    )
}

export default ToDo