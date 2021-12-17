import React from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import { connect } from 'react-redux';
import * as operations from '../../redux/todos/todos.oparations';
import { getVisibleTodos } from '../../redux/todos/todos-selector';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={styles.list}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.items}>
        <Todo
          text={text}
          completed={completed}
          onDeleteTodo={() => onDeleteTodo(id)}
          onToggleCompleted={() =>
            onToggleCompleted({ id, completed: !completed })
          }
        />
      </li>
    ))}
  </ul>
);

const mapStateTodispatch = state => ({
  todos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(operations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(operations.toggleCompleted(id)),
});

export default connect(mapStateTodispatch, mapDispatchToProps)(TodoList);
