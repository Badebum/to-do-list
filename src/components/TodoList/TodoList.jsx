import React from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import { connect } from 'react-redux';
import * as actions from '../../redux/todos/todos-actions';

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

const mapStateTodispatch = state => ({
  todos: state.todos.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(actions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(actions.toggleCompleted(id)),
});

export default connect(mapStateTodispatch, mapDispatchToProps)(TodoList);
