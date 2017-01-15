var React = require('react')
var Link = require('react-router').Link

var url = {
  link: [
    'http://www.businessinsider.com.au/story-snap-ceo-evan-spiegel-fabulous-life-snapchat-miranda-kerr-2017-1?r=US&IR=T',
  ]
}

var url_photo = {
  link: [
    'http://www.stuff.co.nz/technology/gadgets/88414640/nintendo-switch-game-console-to-launch-in-march'
  ]
}

function Technology() {
  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('h2', { className: 'technology' }, 'Technology | Stuff'),
        // React.createElement('img', { src: url_photo.link[0], className: 'img-responsive' }),
        React.createElement('a', { href: url.link[0], target: '_blank' }, 'Switch to launch in March')
      )
    )
  )
}

module.exports = Technology
