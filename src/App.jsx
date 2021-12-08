import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as Cross } from './icons/close.svg';
import Statistic from './components/Statistic/Statistic';
import { connect } from 'react-redux';
import { fetchTodos } from './redux/todos/todos.oparations';

class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <IconButton onClick={this.toggleModal} aria-label="открытие модалки">
          <Cross />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}></button>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}

        <div className={styles.container}>
          <Statistic />
          <Filter />
          <TodoList />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(null, mapDispatchToProps)(App);
