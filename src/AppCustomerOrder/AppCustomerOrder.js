import React, { useRef } from "react";
import MaterialTable from "material-table";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
// import Button from "@material-ui/core/Button";
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
import PrintIcon from "@material-ui/icons/Print";
import CropFreeIcon from "@material-ui/icons/CropFree";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  MuiThemeProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

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
  PrintIcon: forwardRef((props, ref) => <PrintIcon {...props} ref={ref} />),
  CropFreeIcon: forwardRef((props, ref) => (
    <CropFreeIcon {...props} ref={ref} />
  )),
};
const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      regular: {
        "@media(min-width:600px)": {
          minHeight: "0px",
        },
      },
    },
  },
});
export default class MaterialTableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "CreateDate", field: "CreateDate", type: "datetime" },
        { title: "co number", field: "co_num" },
        { title: "customer number", field: "cust_num" },
        { title: "name", field: "cust_name" },
        { title: "city", field: "city" },
      ],
      columns_co_item: [
        {
          title: "line",
          field: "co_line",
          type: "numeric",
          defaultSort: "asc",
          cellStyle: {
            width: 10,
            maxWidth: 50,
          },
          headerStyle: {
            width: 5,
            maxWidth: 5,
          },
        },
        {
          title: "item",
          field: "item",
          headerStyle: {
            width: 5,
            minWidth: 400,
          },
        },
        {
          title: "description",
          field: "description",
          headerStyle: {
            width: 5,
            maxWidth: 5,
            minWidth: 400,
          },
        },
        { title: "qty orderd", field: "qty_orderd", type: "numeric" },
        { title: "qty ready", field: "qty_ready", type: "numeric" },
        { title: "qty shipped", field: "qty_shipped", type: "numeric" },
      ],
      selectedRow: null,
      data: [],
    };
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
    console.log(this.state.data);
  }

  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(
        "http://localhost:3000/api/Systeline/returnJson2d/?co_num=EB19070005"
      )
      .then(
        (response) => {
          const myArray = response.data.map((trans) => {
            return {
              CreateDate: trans.CreateDate,
              co_num: trans.co_num,
              cust_num: trans.cust_num,
              cust_name: trans.name,
              city: trans.city,
              cust_seq: trans.cust_seq,
              cust_po: trans.cust_po,
              price: trans.price,
              Uf_StsPo_refNo: trans.Uf_StsPo_refNo,
              Item: trans.Item,
              cost: trans.cost,
              coitem_list: trans.coitem_list,
            };
          });
          console.log(response.data);
          this.setState({ data: myArray });
          console.log(this.componentRef);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //CO18060004
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <MaterialTable
            theme={theme}
            icons={tableIcons}
            title="Customer Order List"
            columns={this.state.columns}
            data={this.state.data}
            onRowClick={(evt, selectedRow) => this.setState({ selectedRow })}
            detailPanel={[
              {
                tooltip: "Show Name",
                render: (rowData) => {
                  return (
                    <div>
                      <MaterialTable
                        theme={theme}
                        title=""
                        style={{
                          backgroundColor: "#FFFFFF",
                          paddingBottom: 20,
                          paddingLeft: 30,
                        }}
                        icons={tableIcons}
                        columns={this.state.columns_co_item}
                        data={rowData.coitem_list}
                        options={{
                          headerStyle: {
                            backgroundColor: "#4f83cc",
                            color: "#FFF",
                            height:20
                          },
                          paging: false,
                          actionsColumnIndex: -1,
                          search: false,
                          showTitle: true,
                        }}
                      />
                      {console.log(rowData.coitem_list)}
                      {console.log(rowData.co_num)}
                      {console.log(rowData)}
                    </div>
                  );
                },
              },
            ]}
            options={{
              exportButton: true,
              paging: true,
              maxBodyHeight: 550,
              actionsColumnIndex: -1,
              loadingType: "linear",
              Search: false,
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
              },
            }}
            actions={[
              {
                icon: (rowData) => <CropFreeIcon />,
                tooltip: "Gen Barcode",
                onClick: (event, rowData) => alert(),
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}
