import React from 'react';

export const Todo = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>My TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="add new task" />
        <button type="submit">Add</button>
      </form>

      <div>List: </div>
    </div>
  );
};
