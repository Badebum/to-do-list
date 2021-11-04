import React from 'react';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id} className={styles.list}>
        <p>{text}</p>
        <button type="button" className={styles.button} onClick={()=> onDeleteTodo(id)}>
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
