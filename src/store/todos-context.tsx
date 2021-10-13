import React, { useState } from 'react';

import Todo from '../models/todo';

// Type för att användas på flera platser
type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
    //Staten ska vara en array med struktur från Class Todo i Todo model
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
  
      //Använder en callback från setTodo för att ta gammla värden och lägga till nya
      setTodos((prevTodos) =>{
        return prevTodos.concat(newTodo);
      });
  
    };
    
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) =>{
        return prevTodos.filter(todo => todo.id !== todoId)  // Behåll alla todos som inte har samma id som klickad Todo
      })
  
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
  
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;