import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';

class TodoStore extends ReduceStore {
  constructor(){
    super(TodoDispatcher);
  }
  getInitialState(){
    return Immutable.OrderedMap();
  }
  reduce(state, action){ // must be pure and have no side-effects.
    switch(action.type){
      case TodoActionTypes.ADD_TODO:
        if(!action.title){
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Todo({
          id, 
          title: action.title,
          complete: false,
        }))
      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id);
      case TodoActionTypes.TOGGLE_TODO:
        return state.update(action.id, todo => todo.set('complete', !todo.complete));
      default: 
        return state;
    }
  }
}

export default new TodoStore();