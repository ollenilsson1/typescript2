import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  //Staten ska vara en array med struktur från Class Todo i Todo model
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    //Använder en callback från setTodo för att ta gammla värden och lägga till nya
    setTodos((prevTodos) =>{
      return prevTodos.concat(newTodo);
    });

  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    
    </div>
  );
}

export default App;
