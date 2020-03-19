import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavDrawer from './NavDrawer/NavDrawer.js'


// import MyDataTable from "./MyDataTable/MyDataTable";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop:theme.spacing(3),
    marginRight:theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:theme.spacing(5)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavDrawer />
      {/* <Grid container spacing={1}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
