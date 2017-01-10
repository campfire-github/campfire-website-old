var React = require('react')
var Link = require('react-router').Link

function HeadLine() {
  return (
    React.createElement('div', {},
      React.createElement('h1', { className: 'HeadLine' },
        React.createElement(Link, { to: '/launcher' }, 'Lotto winners in Rotorua and Porirua')
      )
    )
  )
}

module.exports = HeadLine
