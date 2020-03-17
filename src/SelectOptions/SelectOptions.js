import React, { Component } from "react";
import Axios from "axios";
import GetProps from "./../GetProps/GetProps";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export class SelectOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateNow: "",
      options: [],
    };
  }

  UNSAFE_componentWillMount() {
    //console.log("UNSAFE_componentWillMount ");
  }

  componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=c65e410ca918a233b860e99728916f71&query=her";
    var optionsArray = [];
    Axios.get(url).then(result => {
      result.data.results.forEach(item => {
        optionsArray.push({ value: item.id, label: item.title });
      });
      this.setState({ options:optionsArray });
    });
  }

  setStateOption = (value)=>{
    this.setState({ stateNow: value })
  }

  render() {
    return (
      <div>
        <div>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            onChange={(event, value) => this.setStateOption(value)}
            options={this.state.options.map(option => option.label)}
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
          <GetProps message={this.state.stateNow} />
        </div>
      </div>
    );
  }
}

export default SelectOptions;
