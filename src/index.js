import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import store from "./config/store";

import AppLayout from "./components/AppLayout";
import HomeScreen from "./views/HomeScreen";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Route exact path="/" component={HomeScreen} />
      </AppLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
