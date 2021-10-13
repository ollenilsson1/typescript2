import classes from './TodoItem.module.css';
//Props är alltid ett objekt
//Text string kan döpas till vad som, men ska hämtas från todo.ts Classen
const TodoItem: React.FC<{text: string}> = (props) => {
    return <li className={classes.item}>{props.text}</li>
};


export default TodoItem;