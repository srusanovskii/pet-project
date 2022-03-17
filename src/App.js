import React from "react";
import styled from "styled-components";
import Form from "./Form";
import TitleName from "./Title";
import {useState} from "react";
import ToDo from "./ToDo";
import {Modal} from "./modal";

const AppWrapper = styled.div`
    width: 100%;
    min-height:100vh;
    padding: 2rem;
    background: black;
    color: white;
`

const App = () => {
    const [todos, setTodos] = useState([])
    const [showModal, setShowModal] = useState(false)

    const addTask = (input, input2) => {
        if (input || input2){
            const newItem = {
                id: Math.random().toString(36).substring(2,9),
                task: input,
                task2: input2,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
        
    }
    const handleToggle = () => {

    }

    //id
    //добавить стейт

    const toggleModal = () => {
        setShowModal(prev => !prev)
    }
  return (
      <AppWrapper>
          <Modal showModal={showModal} />
          <TitleName todos={todos}></TitleName>
          <Form addTask={addTask}></Form>
          {todos.map((todo, index)=>{
              return (
                  <ToDo
                      todo={todo}
                      key={todo.id}
                      toggletask={handleToggle}
                      removeTask={removeTask}
                      todos={todos}
                      index={index}
                      toggleModal={toggleModal}
                      showModal={showModal}
                  />
              )
          })}
      </AppWrapper>
  );
};

export default App;
