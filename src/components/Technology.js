var React = require('react')
var Link = require('react-router').Link

function HeadLine() {
  return (
    React.createElement('div', {},
      React.createElement('h1', { className: 'HeadLine' },
        React.createElement(Link, { to: '/launcher' }, 'SpaceX Launches Rocket, Its First Since Explosion on Launchpad')
      )
    )
  )
}

module.exports = HeadLine
