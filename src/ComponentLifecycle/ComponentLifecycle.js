import React, { Component } from "react";

export class ComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor ");
    this.state = {
      data: 0
    };
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount ");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("UNSAFE_componentWillReceiveProps");
  }

  shouldComponentUpdate(newProps,newState) {
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
      console.log('componentWillUnmount');
      
  }

  render() {
    return (
      <div>
        {this.state.data}
        <button onClick={()=>this.setState({ data: this.state.data + 1 })}>
          click {this.state.data}
        </button>
      </div>
    );
  }
}

export default ComponentLifecycle;
