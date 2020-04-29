import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import axios from "axios";
import './style.css';

const getSuggestions = (value, languages) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  console.log(languages);
  return inputLength < 2 ? [] : languages.filter((lang) => lang.label.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = (suggestion) => suggestion.label;
const renderSuggestion = (suggestion) => <div>{suggestion.label}</div>;

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
      languages: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    let languages = [];
    axios
      .post(
        "http://localhost/STS_WEB_API_Deploy/api/Syteline/PostLoadDataSet",
        {
          strIDOName: "SLItems",
          strPropertyList: "Item, Description, UnitCost",
          strFilter: `Item like '%${value}%' `,
          strOrderBy: "Item",
          strPostQueryMethod: "",
          iRecordCap: 0,
        }
      )
      .then(
        (response) => {
          const myArray = response.data.map((item) => {
            return {
              label: item.Item,
              year: item.Item,
            };
          });
          myArray.forEach((element) => {
            languages.push(element);
          });
          this.setState({
            suggestions: getSuggestions(value, languages),
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  componentDidMount() {
  }
  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Example;
