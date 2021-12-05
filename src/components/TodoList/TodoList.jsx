import React from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={styles.list}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.items}>
        <Todo
          text={text}
          completed={completed}
          onDeleteTodo={() => onDeleteTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
