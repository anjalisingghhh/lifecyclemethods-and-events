import React, { Component } from 'react';

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  // Using componentDidMount instead of componentWillMount
  componentDidMount() {
    console.log("Child Mounted.");
  }

  // Using componentWillUnmount to handle cleanup
  componentWillUnmount() {
    console.log("Child will unmount.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the `show` prop is true
    return nextProps.show;
  }

  render() {
    return (
      <div>
        <h2>Child Component {this.props.childName}</h2>
        <input type='text' onChange={this.props.clickHandler} />
        <button onClick={this.props.btnHandler}>Child button</button>
      </div>
    );
  }
}
