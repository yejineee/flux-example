import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TodoEditor from './components/TodoEditor';

function App(props) {
  return (
    <div className="App">
      <TodoEditor {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>  
  );
}

export default App;
