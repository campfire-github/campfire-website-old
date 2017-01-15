var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory
var App = require('./components/App.js')
var SecretLink = require('./components/SecretLink.js')
var NotFound = require('./components/NotFound.js')

var add_url = function () {
  var url = 'https://www.nytimes.com/2017/01/14/science/spacex-falcon-9-iridium-elon-musk.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=second-column-region&region=top-news&WT.nav=top-news&_r=0'
  return (
    React.createElement(SecretLink, { url: url })
  )
}

ReactDOM.render((
  React.createElement(Router, { history: browserHistory },
    React.createElement(Route, { path: '/', component: App }),
    React.createElement(Route, { path: '/secretlink1', component: add_url }),
    React.createElement(Route, { path: '/*', component: NotFound })
  )
), document.getElementById('app'))
