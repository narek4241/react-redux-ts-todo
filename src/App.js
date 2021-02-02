import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>Todo's</h1>
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
