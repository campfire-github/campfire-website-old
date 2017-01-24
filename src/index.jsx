import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

//components
import App from './components/App.jsx'
import NotFound from './components/NotFound.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/*" component={NotFound} />
  </Router>
), document.getElementById('app'))
