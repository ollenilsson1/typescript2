import React from 'react';
import classes from './TodoItem.module.css';
//Props är alltid ett objekt
//Text string kan döpas till vad som, men ska hämtas från todo.ts Classen
const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
};


export default TodoItem;