var React = require('react')
var Link = require('react-router').Link

function NotFound() {
  return (
    React.createElement('div', {},
      React.createElement('h1', {}, '404'),
      React.createElement('ul', {},
        React.createElement('li', {},
          React.createElement(Link, { to: '/' }, 'go back home')
        )
      )
    )
  )
}

module.exports = NotFound
