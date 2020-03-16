import React, { Component } from "react";

export class GetProps extends Component {
  constructor(props) {
    super(props);
    console.log(props.Getprop);

    this.state = {
    };
  }

  render() {
    return (
      <div>d
        <p>{this.state.GetProp}</p>
      </div>
    );
  }
}

export default GetProps;
