var React = require('react')
var Link = require('react-router').Link

function Header() {
  return (
    React.createElement('div', {},
      React.createElement('header', {},
        React.createElement('h1', {},
          React.createElement(Link, { to: '/' }, 'campfire news')
        )
      )
    )
  )
}

module.exports = Header
