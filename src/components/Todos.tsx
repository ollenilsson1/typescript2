import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';
        //Lägger till items string array som alternativ utöver children som är standard i React.FC
        //Man definerar vilken props man vill ha i <> 
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
    <ul className={classes.todos}>
       {props.items.map((item) => (
           <TodoItem key={item.id} text={item.text}/>
       ))}
    </ul>
    );
}

export default Todos;