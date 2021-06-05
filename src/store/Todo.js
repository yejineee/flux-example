import Immutable from 'immutable';

const Todo = Immutable.Record({
  id:'',
  complete :false,
  title: ''
});

export default Todo;