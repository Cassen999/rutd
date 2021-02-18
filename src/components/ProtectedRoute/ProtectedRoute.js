import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import mapStoreToProps from '../../redux/mapStoreToProps';

const ProtectedRoute = (props) => {
  const {
    component: ComponentToProtect,
    authRedirect,
    store,
    ...otherProps
  } = props;

  let ComponentToShow;

  if (store.user.id) {
    ComponentToShow = ComponentToProtect;
  } else {
    ComponentToShow = LoginPage;
  }

  if (store.user.id && authRedirect != null) {
    return <Redirect exact from={otherProps.path} to={authRedirect} />;
  } else if (!store.user.id && authRedirect != null) {
    ComponentToShow = ComponentToProtect;
  }

  return (
    <Route
      {...otherProps}
      component={ComponentToShow}
    />
  );
};

export default connect(mapStoreToProps)(ProtectedRoute);
