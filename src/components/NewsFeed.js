var React = require('react')
var Link = require('react-router').Link
var HeadLine = require('./HeadLine.js')

function NewsFeed() {
  return (
    React.createElement('div', {},
      React.createElement(HeadLine, {})
    )
  )
}

module.exports = NewsFeed
