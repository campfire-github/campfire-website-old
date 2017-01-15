var React = require('react')
var Link = require('react-router').Link

var url = {
  link: [
    'http://www.stuff.co.nz/motoring/news/88352481/police-plan-for-35-new-cameras-to-snap-speeding-drivers-in-national-expansion'
  ]
}

var url_photo = {
  link: [
    'https://resources.stuff.co.nz/content/dam/images/1/g/g/3/8/h/image.related.StuffLandscapeSixteenByNine.620x349.1glp7l.png/1484478296831.jpg'
  ]
}

function National() {
  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('h2', { className: 'national' }, 'National | Stuff'),
        React.createElement('img', { src: url_photo.link[0], className: 'img-responsive' }),
        React.createElement('a', { href: url.link[0], target: '_blank' }, 'More speed cameras coming')
      )
    )
  )
}

module.exports = National
