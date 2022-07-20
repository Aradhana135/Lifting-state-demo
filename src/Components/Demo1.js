import React, { useState } from 'react'
import TodoList from './TodoList'
import Todocount from './Todocount'
import AddTodo from './AddTodo'
const Demo1 = () => {
    const[todos,setTodos]=useState(["Aradhana","XYZ","ABC"])
  return (
    <>
<Todocount todo={todos}/>
<TodoList items={todos}/>
<AddTodo setTodos={setTodos}/>
    </>
  )
}
export default Demo1