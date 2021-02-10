import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
//comment
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
// import VetLandingPage from '../VetLandingPage/VetLandingPage';
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../VetLandingPage/VetLandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import VetMatches from "../VetMatches/VetMatches";
import AdminLandingPage from "../AdminLandingPage/AdminLandingPage";
import AdminResourceList from "../AdminResourceList/AdminResourceList";
import AdminVetList from "../AdminVetList/AdminVetList";
import GenericLanding from "../GenericLanding/GenericLanding";
import OrganizationLandingPage from "../OrganizationLandingPage/OrganizationLandingPage";
import Service from "../Service/Service";
import Demographic from "../Demographic/Demographic";
import Malady from "../Malady/Malady";
import Compensation from "../Compensation/Compensation";
import AdminVetView from "../AdminVetView/AdminVetView";
import AdminOrgView from "../AdminOrgView/AdminOrgView";
import AdminOrgEdit from "../AdminOrgEdit/AdminOrgEdit";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Logic for different login types */}

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={GenericLanding}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/user"
            />

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/vetmatches"
              component={VetMatches}
              // authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/service"
              component={Service}
              // authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/demographic"
              component={Demographic}
              // authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/malady"
              component={Malady}
              // authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/compensation"
              component={Compensation}
              // authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/adminlanding"
              component={AdminLandingPage}
            />

            <ProtectedRoute
              exact
              path="/resourcelist"
              component={AdminResourceList}
            />

            <ProtectedRoute exact path="/vetlist" component={AdminVetList} />

            <ProtectedRoute
              exact
              path="/adminVetView"
              component={AdminVetView}
            />

            <ProtectedRoute
              exact
              path="/adminOrgView"
              component={AdminOrgView}
            />

            <ProtectedRoute
              exact
              path="/adminOrgEdit"
              component={AdminOrgEdit}
            />

            <ProtectedRoute
              exact
              path="/organizationlanding"
              component={OrganizationLandingPage}
            />

            {/* <ProtectedRoute
                exact
                path="/vetlanding"
                component={VetLandingPage}
              />    */}

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default connect()(App);
