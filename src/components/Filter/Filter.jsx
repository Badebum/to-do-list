import React from 'react';
import styles from './Filter.module.css';

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

export default Filter;
