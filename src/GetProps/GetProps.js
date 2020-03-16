import React, { Component } from "react";
import Select from 'react-select';

export class GetProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default GetProps;
