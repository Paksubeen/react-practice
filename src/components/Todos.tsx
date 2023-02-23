import { useContext } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

function Todos() {
  const todosCtx = useContext(TodosContext);
  const { items, removeTodo } = todosCtx;

  return (
    <ListContainer>
      {items.map(item => (
        <TodoItem item={item} key={item.id} onRemoveTodo={removeTodo} />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.ul`
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  width: 40rem;
`;

export default Todos;
