import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const actions = {
  addTodo(title){
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      title,
    })
  },
  deleteTodo(id){
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    })
  },
  toggleTodo(id){
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    })
  }
}

export default actions;