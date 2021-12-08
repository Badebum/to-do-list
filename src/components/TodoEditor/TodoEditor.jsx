import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TodoEditor.module.css';
import * as todosOparations from '../../redux/todos/todos.oparations';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.onSubmit(this.state.message);
      this.props.onSave();
      this.setState({ message: '' });
      return;
    }

    alert('введите заметку');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.subForm}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">save</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosOparations.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
