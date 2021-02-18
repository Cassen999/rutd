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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LandingPage from "../VetLandingPage/VetLandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import VetMatches from "../VetMatches/VetMatches";
import AdminLandingPage from "../AdminLandingPage/AdminLandingPage";
import AdminResourceList from "../AdminResourceList/AdminResourceList";
import AdminVetList from "../AdminVetList/AdminVetList";
import GenericLanding from "../GenericLanding/GenericLanding";
import OrganizationLandingPage from "../OrganizationLandingPage/OrganizationLandingPage";
import RegisterForm from "../RegisterForm/RegisterForm";
import AdminVetView from "../AdminVetView/AdminVetView";
import AdminOrgView from "../AdminOrgView/AdminOrgView";
import AdminOrgEdit from "../AdminOrgEdit/AdminOrgEdit";
import VetFindMatches from "../VetFindMatches/VetFindMatches";
import DemographicQuestion from '../DemographicQuestions/DemographicQuestion'
import VetViewResource from "../VetViewResource/VetViewResource";
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
            <Redirect exact from="/" to="/user" />
            <ProtectedRoute
              exact
              path="/user"
              component={GenericLanding}
            />
            <ProtectedRoute
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
              path="/register"
              component={RegisterForm}
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

            <ProtectedRoute
              exact
              path="/vetFindMatches"
              component={VetFindMatches}
            />

            <ProtectedRoute
              exact
              path="/vetViewResource"
              component={VetViewResource}
            />

            <ProtectedRoute
              exact
              path="/demographicquestion"
              component={DemographicQuestion}
            />


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
