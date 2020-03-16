import React, { Component } from "react";
import Axios from "axios";
import GetProps from './../GetProps/GetProps'


export class SelectOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateNow: '',
      rows: []
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
    Axios.get(url).then(result => {
      result.data.results.forEach(item => {
        dataArray.push(item);
      });

      this.setState({ rows: dataArray });
      console.log(dataArray);
    });
  }

  SelectState = (event) => {
    this.setState({ 
        stateNow: event.target.value ,
    });
    console.log(event.target.value)
  };

  render() {
    return (
      <div>
        <div>
          <select onChange={this.SelectState}>
            {this.state.rows.map(item => (
              <option key={item.id} value={item.title} >
                {item.title}
              </option>
            ))}
          </select>
          
                <p>
                    Now Select is ... {this.state.stateNow}
                </p>
                <GetProps Getprop='asdf'  />
        </div>
      </div>
    );
  }
}

export default SelectOptions;
