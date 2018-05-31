import React from 'react';
import ReactDOM from 'react-dom' ;
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "assets/css/material-dashboard-react.css?v=1.2.0";

import indexRoutes from 'routes/index.js';

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
