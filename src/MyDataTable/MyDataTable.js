import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { Checkbox } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Axios from "axios";


const columns = [
  
  {
    name: "id",
    selector: "id",
    sortable: true,
    right: true
  },
  {
    name: "original_title",
    selector: "original_title",
    sortable: true,
  },
  {
    name: "vote_average",
    selector: "vote_average",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },
  {
    name: "release_date",
    selector: "release_date",
    sortable: true,
    right: true
  },

  
];

const handleChange = state => {
  // You can use setState or dispatch with something like Redux so we can use the retrieved data
  console.log("Selected Rows: ", this.state.selectedRows);
};

class MyDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows:[]
    };
  }
  componentDidMount() {
    
    this.search("her");
    this.setState();
  }
  

  search = keyword => {
    //console.log(keyword)
    const url = "https://api.themoviedb.org/3/search/movie?api_key=c65e410ca918a233b860e99728916f71&query=" + keyword;
    var dataArray = [];
    Axios.get(url).then(result => {
      result.data.results.forEach(item => {
        dataArray.push(item);
      });
      this.setState({ rows: dataArray });
      console.log(dataArray);
    });
  };

  render() {
    return (
      <Card>
        
        <DataTable
          fixedHeader
          fixedHeaderScrollHeight="50vh"
          title="รายงานผู้ใช้งานระบบ"
          columns={columns}
          data={this.state.rows}
          selectableRows
          Clicked
          Selected={handleChange}
          sortIcon={<SortIcon />}
          selectableRowsComponent={Checkbox}
          clearSelectedRows={this.state.toggledClearRows}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    );
  }
}

export default MyDataTable;
