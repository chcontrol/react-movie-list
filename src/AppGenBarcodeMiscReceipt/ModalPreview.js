import React,{ useRef }  from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import ReactToPrint from "react-to-print";
var Barcode = require("react-barcode");

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const Example = () => {
    const componentRef = useRef();
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    );
  };


function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
          ----------------------------
         <Example />

        ------------------------------
      </DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

class ComponentToPrint extends React.Component {
  render() {
    const mystyle = {
      marginleft: -5,
      padding: "10px",
    };
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td colSpan="3">
                <h1 style={{ mystyle }}>
                  <Barcode value={this.props.TagPrintId} />
                </h1>
              </td>
            </tr>
            <tr>
              <td width="10%">STS PO</td>
              <td width="1%">:</td>
              <td width="20%"></td>
              <td width="50%" align="left"></td>
            </tr>
            <tr>
              <td>TYPE</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td>SPEC</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td>NPS</td>
              <td>:</td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td>PCS</td>
              <td>:</td>
              <td colSpan="2"> &nbsp; PCS. / BUNDLE</td>
            </tr>

            <tr>
              <td>WEIGHT</td>
              <td>:</td>
              <td colSpan="2"> &nbsp; KGS. / BUNDLE</td>
            </tr>

            <tr>
              <td>BUNDLE</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td>H/N</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td>CUST</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td>CUST PO</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td>PORT</td>
              <td>:</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td colSpan="3">&nbsp;&nbsp;MADE IN THAILAND</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
