import React from 'react';

function Footer({todos}){

  const remaining = todos.filter(todo => !todo.complete).size;
  const phrase = remaining === 1 ? ' item left' : 'items left';

  return(
    <footer id='footer'>
      <span id='todo-count'>
        <strong>
          {todos.size}
        </strong>
        {phrase}
      </span>
    </footer>
  )
}

export default Footer;