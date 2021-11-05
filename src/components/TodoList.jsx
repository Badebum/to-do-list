import React from 'react';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.list}>
        <input
          type="checkbox"
          className={'TodoList__checkbox'}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />

        <p>{text}</p>
        <button
          type="button"
          className={styles.button}
          onClick={() => onDeleteTodo(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
