import React from 'react'

const TodoList = ({items}) => {
  return (
    <>
    <ul>
      {items.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
    </>
  )
}

export default TodoList