import 'core-js/fn/object/assign';
//React
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Router, Route, Link, browserHistory } from 'react-router';

// redux
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

//immutable
import { fromJS } from 'immutable';

//components
import App from './pages/app';
import User from './pages/user';
import Login from './pages/login';
import Share from './pages/share';
import DevTools from './components/dev-tools';

//middleware
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

//store
const store = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
)(createStore)(reducer)

//devtool
// setTimeout(() => ReactDOM.render(
//   <DevTools store={store}/>,
//   window.document.body.appendChild(document.createElement('div'))
// ), 20)

ReactDOM.render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/index" component={User}>
      </Route>
      <Route path="/Login" component={Login}>
      </Route>
      <Route path="/share" component={Share}>
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
