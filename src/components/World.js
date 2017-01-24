var React = require('react')
var Link = require('react-router').Link

var url = {
  link: [
    'http://www.newyorker.com/magazine/2017/01/23/president-obamas-memorable-parting-words',
  ]
}

function World() {
  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('h2', { className: 'world' }, 'World | New Yorker'),
        React.createElement('a', { href: url.link[0], target: '_blank' }, 'President Obama’s Memorable Parting Words.')
      )
    )
  )
}

module.exports = World
