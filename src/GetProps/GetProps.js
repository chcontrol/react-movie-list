import React, { Component } from "react";
import MyDataTable from "./../MyDataTable/MyDataTable";

export class GetProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        <div>
          <MyDataTable titleTable ={this.props.message} />
        </div>
      </div>
    );
  }
}

export default GetProps;
