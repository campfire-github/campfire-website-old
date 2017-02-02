import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

//components
import App from './components/App.jsx'
import Technology from './components/Technology.jsx'
import World from './components/World.jsx'
import Entertainment from './components/Entertainment.jsx'
import NotFound from './components/NotFound.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/*" component={NotFound} />
    <Route path="/entertainment" component={Entertainment} />
    <Route path="/technology" component={Technology} />
    <Route path="/world" component={World} />
  </Router>
), document.getElementById('app'))
