import React, {useRef} from 'react';

function TodoEditor({onAddTodo}){
  const titleRef = useRef('');
  const resetTitle = () => {
    titleRef.current.value = '';
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    resetTitle()
    onAddTodo(title);
  }
  return (
    <form onSubmit={submitHandler}>
      <input type='text' ref={titleRef} />
    </form>
  )
}

export default TodoEditor;