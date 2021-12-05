import React from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import * as actions from '../../redux/todos/todos-actions';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.searchImput}>
      <label className={styles.titel}>
        Search
        <input
          type="text"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={styles.input}
        />
      </label>
    </div>
  );
};

const getVisibleTodos = (allTodos, filter) => {
  const normFilter = filter.toLocaleLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLocaleLowerCase().includes(normFilter),
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
