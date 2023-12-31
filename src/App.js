import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';
import { Provider } from 'react-redux';
import todoStore from './Redux/Store';

function App() {
  return (
    <Provider store={todoStore}>
      <div className="App">
        <Todo></Todo>
      </div>
    </Provider>
  );
}

export default App;
