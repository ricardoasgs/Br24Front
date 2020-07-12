import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import history from "./config/helper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./config/store";

import AppLayout from "./components/AppLayout";
import ListCompaniesScreen from "./views/ListCompaniesScreen";
import ListContactsScreen from "./views/ListContactsScreen";
import FormCompanyScreen from "./views/FormCompanyScreen";
import FormContactScreen from "./views/FormContactScreen";
import FormDealScreen from "./views/FormDealScreen";
import ListDealsScreen from "./views/ListDealsScreen";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppLayout>
        <Route exact path="/companies" component={ListCompaniesScreen} />
        <Route exact path="/contacts" component={ListContactsScreen} />
        <Route exact path="/deals" component={ListDealsScreen} />
        <Route exact path="/createCompany" component={FormCompanyScreen} />
        <Route exact path="/createContact" component={FormContactScreen} />
        <Route exact path="/createDeal" component={FormDealScreen} />
        <ToastContainer />
      </AppLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
