var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory
var App = require('./components/App.js')
var Launcher = require('./components/Launcher.js')
var NotFound = require('./components/NotFound.js')

ReactDOM.render((
  React.createElement(Router, { history: browserHistory },
    React.createElement(Route, { path: '/', component: App }),
    React.createElement(Route, { path: '/launcher', component: Launcher }),
    React.createElement(Route, { path: '/*', component: NotFound })
  )
), document.getElementById('app'))
