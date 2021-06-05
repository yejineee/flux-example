import React from 'react';

function Todo ({todo : {id, complete, title}, onToggleTodo, onDeleteTodo}){
  return (          
    <li>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={complete} 
        onChange={() => onToggleTodo(id)} />
        <label>{title}</label>
        <button className='destroy' onClick={() => onDeleteTodo(id)}>delete</button>
      </div>
    </li>
          
  )
}


function Main({todos, ...rest}){
  console.log(rest)
  return (
    <section id='main'>
      <ul id='todo-list'>
        {[...todos.values()].reverse().map(todo => (
          <Todo todo={todo} key={todo.id} {...rest} />
        ))}
      </ul>
    </section>
  )
}

export default Main;