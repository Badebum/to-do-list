import React from 'react';
import { connect } from 'react-redux';

const Stats = ({ total, completed }) => (
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

// const completedTodoCount = this.getCalcComplitedTodo();
// const visibleTodos = this.getVisibleTodos();

// getCalcComplitedTodo = () => {
//   const { todos } = this.state;

//   return todos.reduce(
//     (total, todo) => (todo.completed ? total + 1 : total),
//     0,
//   );
// };

const mapStateToProps = state => ({
  total: state.todos.item.length,
  //   completed: null,
});

export default connect(mapStateToProps)(Stats);
