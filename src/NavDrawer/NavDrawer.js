import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Clock from "./../Clock/Clock.js";
import MovieMain from "./../Movie/MovieMain.js";
import SelectOptions from "./../SelectOptions/SelectOptions.js";
import AppManageUserInforSyteline from "./../AppManageUserInforSyteline/AppManageUserInforSyteline.js";
import AppGenBarcodeMiscReceipt from "./../AppGenBarcodeMiscReceipt/AppGenBarcodeMiscReceipt.js";
import AppOXGAME from "./../AppOXGAME/AppOXGAME.js";
import AppCustomerOrder from "./../AppCustomerOrder/AppCustomerOrder.js";

import TagBarcodePrint from './../AppGenBarcodeMiscReceipt/TagBarcodePrint.js';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  title: {
    flexGrow: 1
  }
}));

export default function TemporaryDrawer() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const MenuList = [
    { Menulink: "/", MenuText: "นาฬิกา", prj_icon_fa: <MailIcon /> },
    { Menulink: "/Movie", MenuText: "Movie", prj_icon_fa: "fas fa-ship" },
    { Menulink: "/users", MenuText: "Users", prj_icon_fa: "fas fa-ship" },
    { Menulink: "/AppManageUserInforSyteline", MenuText: "AppManageUserInforSyteline", prj_icon_fa: "fas fa-ship" },
    { Menulink: "/AppGenBarcodeMiscReceipt", MenuText: "AppGenBarcodeMiscReceipt", prj_icon_fa: "fas fa-ship" },
    { Menulink: "/AppOXGAME", MenuText: "AppOXGAME", prj_icon_fa: "fas fa-ship" },
    { Menulink: "/AppCustomerOrder", MenuText: "AppCustomerOrder", prj_icon_fa: "fas fa-ship" }
    
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            STS Web Center
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Router>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
          >
            <List component="nav">
              {MenuList.map((text, index) => (
                <ListItem
                  button
                  component={Link}
                  key={text.Menulink}
                  to={text.Menulink}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.MenuText} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <Switch>
        
          <Route path="/Movie" component={MovieMain}></Route>
          <Route path="/AppGenBarcodeMiscReceipt/TagBarcodePrint" component={TagBarcodePrint}></Route>
          <Route path="/users" component={SelectOptions}></Route>
          <Route path="/AppManageUserInforSyteline" component={AppManageUserInforSyteline}></Route>
          <Route path="/AppGenBarcodeMiscReceipt" component={AppGenBarcodeMiscReceipt}></Route>
          <Route path="/AppOXGAME" component={AppOXGAME}></Route>
          <Route path="/AppCustomerOrder" component={AppCustomerOrder}></Route>
          <Route path="/" component={Clock}></Route>
        </Switch>
      </Router>
    </div>
  );
}
