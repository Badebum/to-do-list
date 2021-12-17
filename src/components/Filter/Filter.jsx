import React from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import * as actions from '../../redux/todos/todos-actions';
import { getFilter } from '../../redux/todos/todos-selector';

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

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
