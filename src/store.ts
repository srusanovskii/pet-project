import { declareAtom, declareAction, createStore } from '@reatom/core';
import { Todo } from "./atoms/Todo";

export type TodoData = {
  topic: string,
  description: string
}

export const addAction = declareAction<TodoData>();
export const delAction = declareAction<Todo>();
export const editAction = declareAction<Todo>();

export const todoListAtom = declareAtom<Todo[]>([], on => [
  on(addAction, (state, todoData): Todo[] => {
    const newTodo = {
      id: Math.random().toString(36).substring(2,9),
      taskTopic: todoData.topic,
      taskDescription: todoData.description,
      complete: true
    };
    
    return [...state, newTodo];
  }),
  on(delAction, (state, todo): Todo[] => {
    return [...state.filter((currentTodo) => currentTodo.id !== todo.id)];
  }),
  on(editAction, (state, todo): Todo[] => {
    return state.map((currentTodo) => currentTodo.id === todo.id ? todo : currentTodo);
  })
]);

export const store = createStore();
