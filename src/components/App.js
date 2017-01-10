var React = require('react')
var Link = require('react-router').Link
var Header = require('./Header.js')
var NewsFeed = require('./NewsFeed.js')
var Footer = require('./Footer.js')
var Contact = require('./Contact.js')

function App() {
  return (
    React.createElement('div', { className: 'container-fluid' },
      React.createElement(Header, {}),
      React.createElement(Contact, {}),
      React.createElement(NewsFeed, {}),
      React.createElement(Footer, {})
    )
  )
}

module.exports = App
