import React from 'react';
import { connect } from 'react-redux';

const Statistic = ({ total, completed }) => (
  <div>
    <p>
      <span>{total}</span>
      <span> Всего </span>
    </p>
    <p>
      <span> {completed} </span>
      <span> Выполнено </span>
    </p>
  </div>
);

const getComplitedTodoCounter = todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: getComplitedTodoCounter(state.todos.items),
});

export default connect(mapStateToProps)(Statistic);
