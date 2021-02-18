import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  input: {
    display: 'none',
  },
});

const LogOutButton = (props) => (
  <Button
    className={props.className}
    style={{
      borderRadius: 35,
      backgroundColor: '#AFFA3D',
      fontFamily: 'orbitron',
    }}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    Log Out
  </Button>
);

export default connect(mapStoreToProps)(withStyles(styles)(LogOutButton));