var React = require('react')
var Link = require('react-router').Link

function NewsFeed() {
  return (
    React.createElement('div', {},
      React.createElement('article', {},
        React.createElement('h1', {}, 'Headline')
      )
    )
  )
}

module.exports = NewsFeed
