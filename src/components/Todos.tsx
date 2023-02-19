import Todo from '../models/todo';
import TodoItem from './TodoItem';

function Todos(props: { items: Todo[] }) {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
}

export default Todos;
