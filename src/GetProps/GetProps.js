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
          <MyDataTable titleTable ={this.props.prj_description} prj_code={this.props.prj_code} />
        </div>
      </div>
    );
  }
}

export default GetProps;
