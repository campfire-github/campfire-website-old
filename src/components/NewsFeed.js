var React = require('react')
var Link = require('react-router').Link
var HeadLine = require('./HeadLine.js')
var Sport = require('./Sport.js')
var Technology = require('./Technology.js')
var World = require('./World.js')


function NewsFeed() {
  return (
    React.createElement('div', {},
      React.createElement(HeadLine, {}),
      React.createElement('section', { className: 'row' },
        React.createElement(Sport, {}),
        React.createElement(Technology, {}),
        React.createElement(World, {})
      )
    )
  )
}

module.exports = NewsFeed
