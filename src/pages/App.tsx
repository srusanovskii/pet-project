import React from "react"
import styled from "styled-components"
import Form from "../molecules/Form"
import TitleName from "../molecules/Title"
import {useState} from "react"
import ToDo from "../organisms/ToDo"
import {EditTodoModal} from "../molecules/EditTodoModal"
import {Todo} from "../atoms/Todo"

interface TodoContext {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}
export const TodoListContext = React.createContext<TodoContext>({} as TodoContext);

const AppWrapper = styled.div`
    width: 100%;
    min-height:100vh;
    padding: 2rem;  
    background: black;
    color: white;
`

const App = () => {
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [showModal, setShowModal] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState<Todo>({} as Todo)

    const toggleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo) => {
        e.preventDefault()
        e.stopPropagation()
        setSelectedTodo(todoItem)
        setShowModal(prev => !prev)
    }

    return (
        <TodoListContext.Provider value={{todoList, setTodoList}}>
            <AppWrapper>
                <TitleName todos={todoList} />
                <Form />
                {showModal && 
                    <EditTodoModal todoForEdit={selectedTodo}/>
                }
                <TodoListContext.Consumer>
                    {value => value.todoList.map((todo, index) => 
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            index={index}
                            toggleModal={toggleModal}
                        />
                    )}
                </TodoListContext.Consumer>
            </AppWrapper>
        </TodoListContext.Provider>
    );
};

export default App;
