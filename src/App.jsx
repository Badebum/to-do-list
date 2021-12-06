import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as Cross } from './icons/close.svg';
import { Stats } from 'webpack';

class App extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const todos = JSON.parse(localStorage.getItem('todos'));
  //   if (todos) {
  //     this.setState({ todos: todos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // toggleCompleted = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if (todo.id === todoId) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }

  //       return todo;
  //     }),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <IconButton onClick={this.toggleModal} aria-label="открытие модалки">
          <Cross />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
            <h1>Modal</h1>
          </Modal>
        )}

        <div className={styles.container}>
          <TodoEditor />
          <Stats />
          <Filter />
          <TodoList />
        </div>
      </>
    );
  }
}

export default App;
