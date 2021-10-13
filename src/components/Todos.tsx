import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

        //Lägger till items string array som alternativ utöver children som är standard i React.FC
        //Man definerar vilken props man vill ha i <> 
        // Eftersom allt hämtas från todos-context med usecontext kan funktionen kortas ner utan props nu.
const Todos: React.FC = () => {
    //Importera TodosContext och spara till en const
    const todosCtx = useContext(TodosContext);

    return (
    <ul className={classes.todos}>
       {todosCtx.items.map((item) => (
           // Bind på onRemoveTodo för att förbereda funktionen att den kommer innehålla ett id i TodoItem.tsx
           <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
       ))}
    </ul>
    );
}

export default Todos;