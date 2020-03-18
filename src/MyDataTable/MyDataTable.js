import React, { Component } from "react";
import Axios from "axios";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class MyDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      titleTable: ""
    };
  }
  componentDidMount() {
    //this.search("her");
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.props.titleTable){
      if(this.props !== prevProps){
        this.search(this.props.titleTable);
      }
    }
    
  }

  search = proj_code => {
    const url = `http://172.18.1.194/sts_web_center/module/${(proj_code.split("]")[0]).split("[")[1]}/data.php?load=GetUserAll`;
    var dataArray = [];
    Axios.get(url).then(result => {
      result.data.forEach(item => {
        dataArray.push(item);
      });
      this.setState({ rows: dataArray });
    });
    //this.setState({ rows: dataArray });
    console.log(dataArray['id']);
    console.log(dataArray);
  };


  render() {
    return (
      <div>
        <p>{this.props.prj_code}</p>
        <MaterialTable
          title={this.props.titleTable}
          icons={tableIcons}
          options={{
            exportButton: true,
            filtering: true,
            paging: false,
            maxBodyHeight: 450,
            minBodyHeight: 450
          }}
          columns={[
            { title: "id", field: "id" },
            { title: "username", field: "username" },
            { title: "fullname", field: "fullname" },
            {
              title: "dep_name",
              field: "dep_name",
            }
          ]}
          data={this.state.rows}
        />
      </div>
    );
  }
}

export default MyDataTable;
