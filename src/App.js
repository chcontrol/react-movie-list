import React from "react";
import Clock from './Clock/Clock.js'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


// import MyDataTable from "./MyDataTable/MyDataTable";
import SelectOptions from "./SelectOptions/SelectOptions";
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
      <Clock />
      <Grid container spacing={1}>
        
          
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <SelectOptions />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
