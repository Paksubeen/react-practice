import React, { useRef } from 'react';

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
    <form onSubmit={submitHandler}>
      <label htmlFor="text">
        Todo text
        <input type="text" id="text" ref={todoTextInputRef} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
