import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ToastContainer } from "react-toastify";

import store from "./config/store";

import AppLayout from "./components/AppLayout";
import ListCompaniesScreen from "./views/ListCompaniesScreen";
import ListContactsScreen from "./views/ListContactsScreen";
import FormCompanyScreen from "./views/FormCompanyScreen";
import FormContactScreen from "./views/FormContactScreen";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Route exact path="/companies" component={ListCompaniesScreen} />
        <Route exact path="/contacts" component={ListContactsScreen} />
        <Route exact path="/createCompany" component={FormCompanyScreen} />
        <Route exact path="/createContact" component={FormContactScreen} />
        <ToastContainer />
      </AppLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
