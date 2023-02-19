import Todo from '../models/todo';

function TodoItem(props: { item: Todo }) {
  const { item } = props;

  return <li key={item.id}>{item.text}</li>;
}

export default TodoItem;
