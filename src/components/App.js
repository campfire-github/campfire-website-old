var React = require('react')
var Link = require('react-router').Link
var Header = require('./Header.js')
// var Navigation = require('./Navigation.js')
var NewsFeed = require('./NewsFeed.js')
var Footer = require('./Footer.js')

function App() {
  return (
    React.createElement('div', { className: 'container-fluid' },
      React.createElement(Header, {}),
      // React.createElement(Navigation, {}),
      React.createElement(NewsFeed, {}),
      React.createElement(Footer, {})
    )
  )
}

module.exports = App
