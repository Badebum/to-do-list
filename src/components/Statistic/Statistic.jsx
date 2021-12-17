import React from 'react';
import { connect } from 'react-redux';
import {
  getTotalTodoCount,
  getComplitedTodoCounter,
} from '../../redux/todos/todos-selector';

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

const mapStateToProps = state => ({
  total: getTotalTodoCount(state),
  completed: getComplitedTodoCounter(state),
});

export default connect(mapStateToProps)(Statistic);
