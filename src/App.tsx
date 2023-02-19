import GlobalStyle from './styles/GlobalStyle';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <>
      <GlobalStyle />
      <Todos items={todos} />
    </>
  );
}

export default App;
