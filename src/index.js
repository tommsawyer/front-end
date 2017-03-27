import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const router = (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Route path="/" component={Home}>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);


ReactDOM.render(
  router,
  document.getElementById('root')
);
