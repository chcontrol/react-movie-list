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
      prj_code: ""
    };
  }

  UNSAFE_componentWillMount() {
    //console.log("UNSAFE_componentWillMount ");
  }

  componentDidMount() {
    const url =
      "http://localhost:88/sts_web_center_new/module/USER_MNG/data.php?load=GetAllProject";
    var optionsArray = [];
    Axios.get(url).then(result => {
      result.data.forEach(item => {
        optionsArray.push({
          value: item.prj_code,
          prj_code: item.prj_code,
          label: item.prj_description
        });
      });
      this.setState({ options: optionsArray });
      
    });
  }

  setStateOption = value => {
    console.log(value);
    this.setState({ stateNow: value, prj_code: value });
  };

  render() {
    return (
      <div>
        <div>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            onChange={(event, value) => this.setStateOption(value)}
            options={this.state.options.map(
              option => '['+option.value + '] ' + option.label
            )}
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
          <GetProps
            prj_description={this.state.stateNow}
            prj_code={this.state.prj_code}
          />
        </div>
      </div>
    );
  }
}

export default SelectOptions;
