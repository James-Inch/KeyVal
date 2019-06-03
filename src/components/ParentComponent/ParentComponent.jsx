import React, { Component } from "react";
import styles from "./ParentComponent.scss";

class ParentComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };

    // This binding is necessary to make `this` work in the callback
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.handleRowKeyChange = this.handleRowKeyChange.bind(this);
    this.handleRowValueChange = this.handleRowValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  


  addRow() {
    this.setState({arr: this.state.arr.concat([{
      k: "",
      v: ""
    }])})
  }

  removeRow(index) {
    var array = [...this.state.arr];
    array.splice(index, 1);
    this.setState({arr: array});
  }

  handleRowKeyChange = idx => evt => {
    const array = this.state.arr.map((obj, sidx) => {
      if (idx !== sidx) return obj;
      return { ...obj, k: evt.target.value };
    });

    this.setState({ arr: array });
  };

  handleRowValueChange = idx => evt => {
    const array = this.state.arr.map((obj, sidx) => {
      if (idx !== sidx) return obj;
      return { ...obj, v: evt.target.value };
    });

    this.setState({ arr: array });
  };

  handleSubmit(event) {
    let keyVals = {}
    this.state.arr.forEach(function(obj){
      keyVals[obj.k] = obj.v;
      event.preventDefault();
      
    });  
    console.log(keyVals);
    
  };


  render() {
    return (
      <div
        data-test-hook="ParentComponentPage"
        className={styles.parentComponent}
      >
        <p>this is the parent component</p>

        <header>This is your header</header>

        <button className={styles.addButton} onClick={this.addRow}>+</button>

        <form onSubmit={this.handleSubmit} className={styles.keyValueContainer}>
          {this.state.arr.map((obj, i) => {
            return (
              <div key={i} className={styles.keyVal}>
                <input value={obj.k} onChange={this.handleRowKeyChange(i)} placeholder="key" />
                <input value={obj.v} onChange={this.handleRowValueChange(i)} placeholder="value" />
                <button onClick={this.removeRow} >X</button>
              </div>
            );
          })}
           <button type="submit" className={styles.submitButton}>submit</button>
        </form>

      </div>
    );
  }
}

export default ParentComponent;
