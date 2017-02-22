import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

//components
import App from './components/App.jsx'
import Technology from './components/Technology.jsx'
import World from './components/World.jsx'
import Entertainment from './components/Entertainment.jsx'
import Sport from './components/Sport.jsx'
import NewsFeedFun from './components/NewsFeed_fun.jsx'
import NotFound from './components/NotFound.jsx'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />

    <Route path="/entertainment" component={Entertainment} />
    <Route path="/technology" component={Technology} />
    <Route path="/sport" component={Sport} />
    <Route path="/world" component={World} />
    <Route path="/newsfeedfun" component={NewsFeedFun} />
    <Route path="/*" component={NotFound} />

  </Router>
), document.getElementById('app'))
