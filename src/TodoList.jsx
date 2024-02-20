import { useState } from "react";

export function TodoList(){
    const [todos, setTodos]=useState([])
    const [newTodo, setNewTodo]=useState('')

    function handleAddTodo(){
        if(newTodo.trim() !== ''){
            setTodos([...todos, newTodo])
            setNewTodo('')
        }}
        return(
            <div>
                <h2>Todo List</h2>
                <ul>
                    {todos.map((todo, index)=>(
                        <li key={{index}}>{todo}</li>
                    ))}
                </ul>
                <div>
                    <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
                    <button onClick={handleAddTodo}>Add todo</button>
                </div>
            </div>
        )
}