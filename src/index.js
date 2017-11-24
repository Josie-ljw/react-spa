import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import User from './components/user';
import { Router, Route, Link,browserHistory } from 'react-router'





// Render the main component into the dom
ReactDOM.render(
    <Router history = {browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/index" component={User}>
    </Route>
  </Router>, document.getElementById('app'));
