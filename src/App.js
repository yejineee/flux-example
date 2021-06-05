import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="App">
      <Main {...props} />
      <Footer {...props} />
    </div>  
  );
}

export default App;
