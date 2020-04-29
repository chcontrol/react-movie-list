import React, { useRef } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import Button from "@material-ui/core/Button";
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
import ReactToPrint from "react-to-print";
var Barcode = require("react-barcode");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

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

export default class MaterialTableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "TransNum", field: "TransNum", defaultSort: "desc" },
        { title: "TransDate", field: "TransDate", type: "datetime" },
        { title: "item", field: "Item" },
        { title: "qty", field: "Qty", type: "numeric" },
        { title: "lot", field: "Lot" },
      ],
      data: [],
      TagPrintId: "xxxxxxxxxxx",
    };
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
    console.log(this.state.data);
  }

  componentDidMount() {
    console.log("componentDidMount");
    axios
      .post(
        "http://172.18.1.194:99/sts_web_api/api/Syteline/PostLoadDataSet",
        {
          strIDOName: "SLMatltrans",
          strPropertyList: "TransNum,TransDate,Item,Lot,TransType,Qty",
          strFilter: "Item like '%%' and TransType='H' ",
          strOrderBy: "TransNum",
          strPostQueryMethod: "",
          iRecordCap: 500,
        }
      )
      .then(
        (response) => {
          const myArray = response.data.map((trans) => {
            return {
              TransNum: trans.TransNum,
              TransDate: trans.TransDate,
              Item: trans.Item,
              Lot: trans.Lot,
              Qty: trans.Qty,
            };
          });
          this.setState({ data: myArray });
          console.log(this.componentRef);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  Genbarcode(TransNum, item, lot, Qty) {
    axios
      .post("http://172.18.1.194:99/sts_web_api/api/Syteline/MvBcTag", {
        item: item,
        lot: lot,
        qty1: Qty,
        qty2: 0,
        uf_act_Weight: 0,
        uf_pack: 0,
        sts_no: 0,
        qty_sts_no: 0,
        trans_num: TransNum,
      })
      .then(
        (response) => {
          this.setState({
            TagPrintId: response.data.id,
            STSPO: response.data.id,
            lot: response.data.lot,
            qty1: response.data.qty1,
            qty2: response.data.qty2,
            spec: response.data.spec,
            grade: response.data.Uf_spec,
            Uf_tagdesc: response.data.Uf_tagdesc,
            Uf_NPS: response.data.Uf_NPS,
            Uf_Schedule: response.data.Uf_Schedule,
            Uf_length: response.data.Uf_length,
          });
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <MaterialTable
                  icons={tableIcons}
                  title="Mat trans Misc Receipt"
                  columns={this.state.columns}
                  data={this.state.data}
                  options={{
                    exportButton: true,
                    paging: false,
                    maxBodyHeight: 520,
                    actionsColumnIndex: -1,
                    loadingType: "linear",
                  }}
                  actions={[
                    {
                      icon: (rowData) => <CropFreeIcon />,
                      tooltip: "Gen Barcode",
                      onClick: (event, rowData) =>
                        this.Genbarcode(
                          rowData.TransNum,
                          rowData.Item,
                          rowData.Lot,
                          rowData.Qty
                        ),
                    },
                  ]}
                />
              </td>
              <td style={{ width: 80 }}>
                {/* <div style={{ display: "none" }}></div> */}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <ComponentToPrint
                          TagId={this.state.TagPrintId}
                          STSPO={this.state.STSPO}
                          TYPE={this.state.TYPE}
                          lot={this.state.lot}
                          qty1={this.state.qty1}
                          qty2={this.state.qty2}
                          spec={this.state.spec}
                          grade={this.state.grade}
                          Uf_tagdesc={this.state.Uf_tagdesc}
                          Uf_NPS={this.state.Uf_NPS}
                          Uf_Schedule={this.state.Uf_Schedule}
                          Uf_length={this.state.Uf_length}
                          ref={(el) => (this.componentRef = el)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>
                        <ReactToPrint
                          trigger={() => (
                            <Button variant="contained" color="primary">
                              <PrintIcon />
                              Print tag barcode
                            </Button>
                          )}
                          content={() => this.componentRef}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TagPrintId: "",
    };
  }
  render() {
    const mystyle = {
      padding: "0",
      fontSize: 14,
      margin: 0,
    };

    const font = {};

    return (
      <div>
        <table style={{ fontSize: 14, padding: 25 }}>
          <tbody>
            <tr>
              <td colSpan="3">
                <h2 style={{ mystyle }}>
                  <Barcode value={this.props.TagId} />
                </h2>
              </td>
            </tr>
            <tr>
              <td width="10%">STS PO</td>
              <td width="1%">:</td>
              <td width="20%">{this.props.STSPO}</td>
              <td width="50%" align="left"></td>
            </tr>
            <tr>
              <td>TYPE</td>
              <td>:</td>
              <td colSpan="2">{this.props.TYPE}</td>
            </tr>
            <tr>
              <td>SPEC</td>
              <td>:</td>
              <td colSpan="2">
                {this.props.spec} &nbsp;{this.props.grade}
                {this.props.Uf_tagdesc}
              </td>
            </tr>
            <tr>
              <td>NPS</td>
              <td>:</td>
              <td>
                <span>
                  {this.props.Uf_NPS} x {this.props.Uf_Schedule} x{" "}
                  {this.props.Uf_length}
                </span>
              </td>
            </tr>
            <tr>
              <td>PCS</td>
              <td>:</td>
              <td colSpan="2">{this.props.qty1} &nbsp; PCS. / BUNDLE</td>
            </tr>

            <tr>
              <td>WEIGHT</td>
              <td>:</td>
              <td colSpan="2">{this.props.qty2} &nbsp; KGS. / BUNDLE</td>
            </tr>

            <tr>
              <td>BUNDLE</td>
              <td>:</td>
              <td colSpan="2">-</td>
            </tr>
            <tr>
              <td>H/N</td>
              <td>:</td>
              <td colSpan="2">-</td>
            </tr>
            <tr>
              <td>CUST</td>
              <td>:</td>
              <td colSpan="2">-</td>
            </tr>
            <tr>
              <td>CUST PO</td>
              <td>:</td>
              <td colSpan="2">-</td>
            </tr>
            <tr>
              <td>PORT</td>
              <td>:</td>
              <td colSpan="2">-</td>
            </tr>
            <tr>
              <td colSpan="3">{this.props.lot}&nbsp;&nbsp;MADE IN THAILAND</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
