import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prevTodos => prevTodos.concat(newTodo));
  };

  return (
    <>
      <GlobalStyle />
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
