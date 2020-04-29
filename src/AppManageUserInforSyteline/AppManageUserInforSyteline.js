import React from "react";
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
import { components } from "react-select";
import axios from "axios";

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
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};






export default class MaterialTableDemo extends React.Component {
    UNSAFE_componentWillMount() {
        console.log("componentWillMount");
      }  

state = {
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  };
    componentDidMount () {
        console.log("asdf");
        axios.get('/url')
        .then(function (response) {
          console.log("response");
         // self.setState({events: response.data})
        })
       .catch(function (error) {
          console.log(error);
       });
    }
  render() {
    return (
        <div>dd
            {console.log("asdf")}
          <MaterialTable
            icons={tableIcons}
            title="Table Nameda"
            columns={this.state.columns}
            data={this.state.data}
            options={{
              exportButton: true,
              paging: false,
              maxBodyHeight: 500,
              actionsColumnIndex: -1,
            }}
            actions={[
              {
                icon: "G",
                tooltip: "Gen Barcode",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
              {
                icon: "P",
                tooltip: "Print",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
            ]}
          />
        </div>
      );
  }
  
}
