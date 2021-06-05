import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const actions = {
  addTodo(title){
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      title,
    })
  }
}

export default actions;