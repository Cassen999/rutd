import React from 'react';
import { connect } from 'react-redux';

const LogOutButtonNav = (props) => (
  <button
    className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    Log Out
  </button>
);

export default connect()(LogOutButtonNav);