import React from 'react';

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        //className={'TodoList__checkbox'}
        checked={completed}
        onChange={onToggleCompleted}
      />

      <p>{text}</p>
      <button
        type="button"
        //   className={styles.button}
        onClick={onDeleteTodo}
      >
        delete
      </button>
    </div>
  );
};

export default Todo;
