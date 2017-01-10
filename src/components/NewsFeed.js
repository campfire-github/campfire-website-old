var React = require('react')
var Link = require('react-router').Link
var HeadLine = require('./HeadLine.js')

function NewsFeed() {
  return (
    React.createElement('div', { className: 'container' },
      React.createElement(HeadLine, {}),
      React.createElement('div', { className: 'row' },
        React.createElement('div', { className: 'col-md-4' },
          React.createElement('p', {},
            React.createElement(Link, { to: '/launcher' }, 'Lotto winners in Rotorua and Porirua'),
            React.createElement(Link, { to: '/launcher' }, '\nLotto winners in Rotorua and Porirua'),
            React.createElement(Link, { to: '/launcher' }, '\nLotto winners in Rotorua and Porirua'),
            React.createElement(Link, { to: '/launcher' }, '\nLotto winners in Rotorua and Porirua')
          )
        ),
        React.createElement('div', { className: 'col-md-4' },
          React.createElement('p', {},
            React.createElement(Link, { to: '/launcher' }, 'Lotto winners in Rotorua and Porirua')
          )
        ),
        React.createElement('div', { className: 'col-md-4' },
          React.createElement('p', {},
            React.createElement(Link, { to: '/launcher' }, 'Lotto winners in Rotorua and Porirua')
          )
        )
      )
    )
  )
}

module.exports = NewsFeed
