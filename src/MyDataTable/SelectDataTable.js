import React, { Component } from "react";
import Axios from "axios";
import Select from 'react-select';



export class SelectDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedOption: null,
        options:"11"
    };
    console.log("1");
  }


  
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  search = (keyword) => {
    console.log(this.options)
    console.log(keyword)
    const url =`https://api.themoviedb.org/3/search/movie?api_key=c65e410ca918a233b860e99728916f71&query=${keyword}`;
    var dataArray = [];
    Axios.get(url).then(result => {
      result.data.results.forEach(item => {
        dataArray.push(item);
        item.poster_src = `http://image.tmdb.org/t/p/w185/${item.poster_path}`;
      });
      this.setState({ rows: dataArray });
      console.log(dataArray)
    });
  };
  componentWillMount(){
    console.log("componentWillMount")
  }
  componentDidMount() {
      console.log("componentDidMount")
      console.log(this.options);
    this.search("her");
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
           <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={this.options}
          />
        <input type="text" onChange={(event)=>{this.search(event.target.value)}} />
        <p>{this.props.words}</p>
      </div>
    );
  }
}

export default SelectDataTable;
