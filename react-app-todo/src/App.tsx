import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

  }, []);

  // https://jsonplaceholder.typicode.com/todos

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
