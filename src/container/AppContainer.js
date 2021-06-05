import App from '../App';
import {Container} from 'flux/utils';
import TodoStore from '../store/TodoStore';
import TodoActions from '../store/TodoActions';



function getStores(){
  return [TodoStore];
}
/*
getState() : Getter that exposes the entire state of this store. 
Flux app에서 Flux에 대해 알고 있는 곳은 container 가 유일하다.
따라서, 이 컨테이너에 콜백을 정의하여, View에게 내려주어야 한다.
뷰는 액션을 직접적으로 dispatch하기 않고, 이렇게 전달받은 액션을 dispatch하게 된다.
*/
// 
function getState(){
  return {
    todos: TodoStore.getState(),
    onAddTodo: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

export default Container.createFunctional(App, getStores, getState);

