import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log();
  }

  componentWillUnmount() {
    console.log();
  }

  render() {
    return (
      <div className={styles.modal__backdrop}>
        <div className={styles.modal__content}> {this.props.children} </div>
      </div>
    );
  }
}
