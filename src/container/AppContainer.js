import App from '../App';
import {Container} from 'flux/utils';
import TodoStore from '../store/TodoStore';

function getStores(){
  return [TodoStore];
}

function getState(){
  return {todos: TodoStore.getState()};
}

export default Container.createFunctional(App, getStores, getState);

