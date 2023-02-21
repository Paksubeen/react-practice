import styled from 'styled-components';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  width: 40rem;
`;

function Todos(props: { items: Todo[] }) {
  const { items } = props;

  return (
    <ListContainer>
      {items.map(item => (
        <TodoItem item={item} />
      ))}
    </ListContainer>
  );
}

export default Todos;
