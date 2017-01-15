var React = require('react')
var Link = require('react-router').Link

var url = 'https://www.nytimes.com/2017/01/14/science/spacex-falcon-9-iridium-elon-musk.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=second-column-region&region=top-news&WT.nav=top-news&_r=0'

function HeadLine() {
  return (
    React.createElement('div', {},
      React.createElement('h1', { className: 'HeadLine' },
        // React.createElement(Link, { to: '/secretlink1' }, 'SpaceX Launches Rocket, Its First Since Explosion on Launchpad')
        React.createElement('a', { href: url, target: '_blank' }, 'SpaceX Launches Rocket, Its First Since Explosion on Launchpad')
      )
    )
  )
}

module.exports = HeadLine
