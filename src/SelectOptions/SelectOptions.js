import React, { Component } from "react";
import Axios from "axios";
import GetProps from "./../GetProps/GetProps";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from '@material-ui/core/TextField';

export class SelectOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateNow: "",
      rows: [],
      dataArray: {},
      options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ]
    };
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount ");
  }

  componentDidMount() {
    console.log("componentDidMount");
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=c65e410ca918a233b860e99728916f71&query=jack";
    var dataArray = [];
    var optionsArray = [];
    Axios.get(url).then(result => {
      result.data.results.forEach(item => {
        dataArray.push(item);
        optionsArray.push({ value: item.value, label: item.title });
      });

      this.setState({ rows: dataArray });
      this.setState({ options: optionsArray });
      console.log(optionsArray);
      console.log();
    });
  }

  SelectState = event => {
    this.setState({
      stateNow: event.target.value
    });
    console.log(event.target.value);
  };


  render() {
    return (
      <div>
        <div>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            onChange={(event, value) => this.setState({stateNow: value})}
            options={this.state.rows.map(option => option.title)}
            
            renderInput={params => (
              <TextField
                {...params}
                label="Search input"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />

          <select onChange={this.SelectState}>
            {this.state.rows.map(item => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>

          <p>Now Select is ... {this.state.stateNow}</p>
          <GetProps message={this.state.stateNow} />
        </div>
      </div>
    );
  }
}

export default SelectOptions;
