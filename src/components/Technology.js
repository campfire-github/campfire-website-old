var React = require('react')
var Link = require('react-router').Link

var url = {
  link: [
    'http://www.businessinsider.com.au/story-snap-ceo-evan-spiegel-fabulous-life-snapchat-miranda-kerr-2017-1?r=US&IR=T',
  ]
}

var url_photo = {
  link: [
    'https://media.glamour.com/photos/578fa09d125389fd40f1a13f/master/w_743,c_limit/miranda-kerr-engaged-engagement-ring.png'
  ]
}

function Technology() {
  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('h2', {}, 'Technology | Business Insider'),
        React.createElement('img', { src: url_photo.link[0], className: 'img-responsive' }),
        React.createElement('a', { href: url.link[0], target: '_blank' }, 'The story of Snap CEO Evan Spiegel\'s life.')
      )
    )
  )
}

module.exports = Technology
