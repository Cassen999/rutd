import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

// This component exports a Progress Bar that can be implemented anywhere in the app
// Currently the Progress Bar is not implemented anywhere in the app

const useStyles = makeStyles({
  barRoot: {
    width: '100%',  
  },
  root: {
    height: '25px',
    border: "2px groove grey",
  },
  colorPrimary: {
    backgroundColor: '#ADFA3B',
  },
  barColorPrimary: {
    backgroundColor: '#4b780a',
  }
});

const ProgressBar = (props) => {
  const classes = useStyles();
  return (
    <div position="relative" display="inline-flex" className={classes.barRoot}>
      <LinearProgress variant="determinate" {...props} display="flex" className={classes.root} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
    </div>
  );
}

export default ProgressBar;
