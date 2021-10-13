import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';


function App() {
 
  //Lägg TodosContextProvider runt alla components som ska använda den
  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
    
    </TodosContextProvider>
  );
}

export default App;
