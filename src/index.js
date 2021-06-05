import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/AppContainer';
import TodoActions from './store/TodoActions';
import './index.css';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);

TodoActions.addTodo('first task');
TodoActions.addTodo('second task');
TodoActions.addTodo('third task');