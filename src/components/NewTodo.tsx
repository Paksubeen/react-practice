import styled from 'styled-components';
import React, { useRef } from 'react';

const FormContainer = styled.form`
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  width: 40rem;
  & > label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & input {
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #f7f5ef;
    border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
  }
  & > button {
    font: inherit;
    background-color: #ebb002;
    border: 1px solid #ebb002;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
  }
  & > button:hover,
  button:active {
    background-color: #ebc002;
    border-color: #ebc002;
  }
`;

function NewTodo(props: { onAddTodo: (text: string) => void }) {
  const { onAddTodo } = props;
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <label htmlFor="text">
        Todo text
        <input type="text" id="text" ref={todoTextInputRef} />
      </label>
      <button type="submit">Add Todo</button>
    </FormContainer>
  );
}

export default NewTodo;
