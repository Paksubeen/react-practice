import styled from 'styled-components';
import Todo from '../models/todo';

const ItemContainer = styled.li`
  margin: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: #f7f5ef;
`;

function TodoItem(props: { item: Todo }) {
  const { item } = props;

  return <ItemContainer key={item.id}>{item.text}</ItemContainer>;
}

export default TodoItem;
