import React, { Component } from 'react';
import styles from './ParentComponent.scss';

class ParentComponent extends Component {
  state = {

  }
  render() { 
    return (
      <div data-test-hook="ParentComponentPage" className={styles.sampleComponent}>
      <p>this is the parent component</p>
      <header>This is your header</header>
      <button className={styles.addButton}>+</button>
      <div className={styles.keyValueContainer}></div>
      <button className={styles.submitButton}>submit</button>
      </div>
      );
  }
}
 
export default ParentComponent;
