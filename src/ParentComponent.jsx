import React, { Component } from 'react';
import { ChildComponent } from './ChildComponent';

export class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || 'Default Name', // Added a fallback value for `name`
      hide: false,
      show: false,
    };
  }

  parentHandler = (e) => {
    console.log("Parent Clicked: ", e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  // Using componentDidMount instead of componentWillMount
  componentDidMount() {
    console.log("Parent Mounted.");
  }

  hideChild = () => {
    this.setState({
      hide: true,
    });
  };

  btnHandler = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <div>
        <h1>Parent Component {this.state.name}</h1>
        <button onClick={this.hideChild}>Hide Child</button>
        {
          !this.state.hide && (
            <ChildComponent
              btnHandler={this.btnHandler}
              show={this.state.show}
              clickHandler={this.parentHandler}
              childName={this.state.name} // Pass `name` as `childName`
            />
          )
        }
      </div>
    );
  }
}
