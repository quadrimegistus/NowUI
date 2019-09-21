import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.3.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route
        path="/admin"
        render={props => {
          return <AdminLayout {...props} />;
        }}
      />
      <Route
        path="/auth"
        render={props => {
          return <AuthLayout {...props} />;
        }}
      />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
