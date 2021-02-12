import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

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

    //     <React.Fragment>
    //         <Box position="relative" display="inline-flex" className={classes.root}>
    //         <CircularProgress variant="determinate" {...props} />
    //         <LinearProgress variant="determinate" {...props} />
    //         <Box
    //         top={0}
    //         left={0}
    //         bottom={0}
    //         right={0}
    //         position="absolute"
    //         display="flex"
            // alignItems="center"
            // justifyContent="center"
    //         className={classes.progressBox}
    //         >
    //         <Typography variant="caption" component="div" color="textSecondary">{`${props.value}%`}</Typography>
    //         </Box>
    //     </Box>
    //   </React.Fragment>

    );
}

export default ProgressBar;
