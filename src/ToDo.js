import React, { useState } from 'react'
import todo from './todo.css'

const ToDo = () => {
    const[todos,setodos]=useState([])
    const[inputValue,setinputValue]=useState('')
    const [editMode,seteditMode]=useState(false)
    const[editId,seteditId]=useState(null);
    const[editvalue,seteditvalue]=useState('');
    const addTodo=()=>{
        if(inputValue.trim()!==''){
            const newTodo={
                id:new Date().getTime(),
                text:inputValue,
            }
            setodos([...todos,newTodo])  ;//store previous as well as current new one
            setinputValue('')
        }
    }
    const deleteTodo=(id)=>{
        const updateTodos=todos.filter((todo)=>todo.id!==id);
        setodos(updateTodos);
    }
    const editTodo=(id,text)=>{
        seteditMode(true);
        seteditId(id);
        seteditvalue(text)

    }
 const updateTodo=()=>{
    const updateTodos=todos.map((todo)=>{
        if(todo.id===editId){
            return{...todo,text:editvalue}
        }
        return todo
    })
    setodos(updateTodos)
    seteditMode(false);
    seteditId(null)
    seteditvalue('');
 }
   
 return (
    <div className="todo-container">
      <h2>ToDo List</h2>
      
      <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
      
      {editMode ? (
        <div>
          <input type="text" value={editvalue} onChange={(e) => seteditvalue(e.target.value)} />
          <button onClick={updateTodo}>Update</button>
        </div>
      ) : (
        <button onClick={addTodo}>Add</button>
      )
      
      }
  
<ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default ToDo
