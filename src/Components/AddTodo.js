import React, { useState } from 'react'

const AddTodo = ({setTodos}) => {
    function handleSubmit(event) {
        event.preventDefault();
        const todo = event.target.todo.value;
        console.log(todo);
        setTodos((prevState)=>[...prevState,todo])
      }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
    </>
  )
}

export default AddTodo