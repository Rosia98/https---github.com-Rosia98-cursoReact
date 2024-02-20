import { useState } from "react";
import styles from "./TodoList.module.scss"

export function TodoList(){
    const [todos, setTodos]=useState([])
    const [newTodo, setNewTodo]=useState('')

    function handleAddTodo(){
        if(newTodo.trim() !== ''){
            setTodos([...todos, newTodo])
            setNewTodo('')
        }}
    
    function handleResetTodos(){
        setTodos([])
        setNewTodo('')
    }

    function handleRemoveTodo(index){
        const updatedTodos =[...todos]
        updatedTodos.splice(index, 1)
        setTodos(updatedTodos)
    }
        return(
            <div>
                <h2 className={styles.todoHeader}>Todo List</h2>
                <ul className={styles.todoList}>
                    {todos.map((todo, index)=>(
                        <li key={{index}}>{todo}
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)} className={styles.removeButton}>Remove</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
                    <button onClick={handleAddTodo}>Add todo</button>
                    <button onClick={handleResetTodos}>Reset Todos</button>
                </div>
            </div>
        )
}