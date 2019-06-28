import React from 'react';   
import styles from './KeyValComponent.scss';

function KeyValComponent() {
    retutn (
        <form onSubmit={this.handleSubmit} className={styles.keyValueContainer}>
        {this.state.arr.map((obj, i) => {
          return (
            <div key={i} className={styles.keyVal}>
              <input  value={obj.k} onChange={this.handleRowKeyChange(i)} placeholder="key" />
              <input  value={obj.v} onChange={this.handleRowValueChange(i)} placeholder="value" />
              <button onClick={this.removeRow(i)} >X</button>
            </div>
          );
        })}
         <button type="submit" className={styles.submitButton}>submit</button>
      </form>
    )
}

export default KeyValComponent;