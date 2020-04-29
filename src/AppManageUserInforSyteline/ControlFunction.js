import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Autosuggest from 'react-autosuggest';
import Example from './SelectBox';
export default class PersonList extends React.Component {
  state = {
    options: [],
  };

  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  search = (keyword)=>{
    axios
      .post("http://localhost/STS_WEB_API_Deploy/api/Syteline/PostLoadDataSet", {
        strIDOName: "SLItems",
        strPropertyList: "Item, Description, UnitCost",
        strFilter: `Item like '%${keyword}%' `,
        strOrderBy: "Item",
        strPostQueryMethod: "",
        iRecordCap: 0,
      })
      .then(
        (response) => {
          const myArray = response.data.map((item) => {
            return {
              value: item.Item,
              label: item.Item
            };
          });
          this.setState({ options: myArray });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.search('FC011N0001200');
  }
  render() {
    return (
      <div>
          <Example />
            <input type="button" value='click' />
      </div>
    );
  }
}