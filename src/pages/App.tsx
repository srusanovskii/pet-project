import styled from "styled-components"
import Form from "../molecules/Form"
import TitleName from "../molecules/Title"
import {useState} from "react"
import ToDo from "../organisms/ToDo"
import {EditTodoModal} from "../molecules/EditTodoModal"
import {Todo} from "../atoms/Todo"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { setAction } from "./../store";
import { useAction } from '@reatom/react';

import { todoListAtom } from "../store"
import { useAtom } from "@reatom/react";

const AppWrapper = styled.div`
    width: 100%;
    min-height:100vh;
    padding: 2rem;  
    background: black;
    color: white;
`

const App = () => {
    const todoList = useAtom(todoListAtom);
    const [showModal, setShowModal] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState<Todo>({} as Todo)

    const setTodoList = useAction((todoList: Todo[]) => {
        return setAction(todoList);
    })

    const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    }

    function onDragEnd(result: any) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        setTodoList(reorder(todoList, result.source.index, result.destination.index));
      }

    const toggleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todoItem: Todo) => {
        e.preventDefault()
        e.stopPropagation()
        setSelectedTodo(todoItem)
        setShowModal(prev => !prev)
    }

    return (
        <AppWrapper>
            <TitleName todos={todoList} />
            <Form />
            {showModal && 
                <EditTodoModal todoForEdit={selectedTodo}/>
            }
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoList.map((todo, index) => 
                                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <ToDo
                                                todo={todo}
                                                key={todo.id}
                                                index={index}
                                                toggleModal={toggleModal}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </AppWrapper>
    );
};

export default App;
