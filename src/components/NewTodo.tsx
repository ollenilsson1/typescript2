import { useRef } from "react";

import classes from './NewTodo.module.css'

// Tar med en funktion från app.tsx som props, Specifiera funktion med arrow funktion, eftersom den inte returnerar här så void
const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    //Specifiera att det ör ett inputElement som ska användas, måste ha ett startvärde (null)
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    // React formevent för att event i forms
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // ? kommer från att det kan vara ett tomt värde till en början - Vet man att det är ett värde Byt ut ? mot !
        const enteredText = todoTextInputRef.current!.value

        if(enteredText.trim().length === 0){
            //error ingen string
            return;
        }

        props.onAddTodo(enteredText);

    };


    return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
    );
};



export default NewTodo;