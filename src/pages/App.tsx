import React from "react";
import styled from "styled-components";
import Form from "../molecules/Form";
import TitleName from "../molecules/Title";
import {useState} from "react";
import ToDo from "../organisms/ToDo";
import {EditTodoModal} from "../molecules/EditTodoModal";
import {Todo} from "../atoms/Todo";

const AppWrapper = styled.div`
    width: 100%;
    min-height:100vh;
    padding: 2rem;  
    background: black;
    color: white;
`

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [showModal, setShowModal] = useState(false)
    const [editItem, setEditItem] = useState<Todo>({} as Todo)

    const addTask = (topic: string, description: string) => {
        if (topic || description){
            const newItem = {
                id: Math.random().toString(36).substring(2,9),
                taskTopic: topic,
                taskDescription: description,
                complete: true
            }
            setTodos([...todos, newItem])
        }
    }
    const removeTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
         e.preventDefault()
         e.stopPropagation()
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const toggleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo) => {
        e.preventDefault()
        e.stopPropagation()
        setEditItem(todoItem)
        setShowModal(prev => !prev)
    }
    const editTask = (newTodoItem: Todo) =>{
       const newTodos = todos.map((currentValue)=>{
            if (currentValue.id === newTodoItem.id){
                return newTodoItem
            }
            return currentValue
        })
        setTodos(newTodos)
    }
  return (
      <AppWrapper>
          <TitleName todos={todos}></TitleName>
          <Form addTask={addTask}></Form>
          {showModal && 
            <EditTodoModal editTask={editTask} editItem={editItem}/>
          }
          
          {todos.map((todo, index)=>{
              return (
                  <ToDo
                      todo={todo}
                      key={todo.id}
                      removeTask={removeTask}
                      // todos={todos}
                      index={index}
                      toggleModal={toggleModal}
                      // showModal={showModal}
                      // setShowModal={setShowModal}
                      editTask={editTask}
                  />
              )
          })}
      </AppWrapper>
  );
};

export default App;
