import { createAtom } from '@reatom/core';

import { Todo } from "./atoms/Todo";

type TodoData = {
  topic: string;
  description: string;
}

export const todoListAtom = createAtom(
  { 
    add: (data: TodoData) => data,
    delete: (todo: Todo) => todo,
    edit: (todo: Todo) => todo 
  },

  (track, state: Todo[] = []) => {
    track.onAction('add', (data) => {
      const newTodo = {
        id: Math.random().toString(36).substring(2,9),
        taskTopic: data.topic,
        taskDescription: data.description,
        complete: true
      };
      
      state = [...state, newTodo];
    });
      

    track.onAction('delete', (todo) => 
      state = [...state.filter((currentTodo) => currentTodo.id !== todo.id)]
    );
    
    track.onAction('edit', (todo) => 
      state = state.map((currentTodo) =>
        currentTodo.id === todo.id ? todo : currentTodo
      )
    );

    return state
  }
);
