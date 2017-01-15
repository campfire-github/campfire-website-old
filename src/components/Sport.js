var React = require('react')
var Link = require('react-router').Link

var url = {
  link: [
    'http://www.foxsports.com/ufc/story/dana-white-fires-back-floyd-mayweather-mocked-conor-mcgregor-fight-offer-011517',
    'http://www.foxsports.com/ufc/story/floyd-mayweather-laughs-dana-whites-offer-conor-mcgregor-fight-011317'
  ]
}

var url_photo = {
  link: [
    'https://www.thesun.co.uk/wp-content/uploads/2017/01/floyd1.jpg?strip=all&w=960'
  ]
}

function Sport() {
  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('h2', {}, 'Sport | Fox Sports'),
        React.createElement('a', { href: url.link[0], target: '_blank' }, 'Dana White fires back at Floyd Mayweather after he mocked Conor McGregor fight offer.'),
        React.createElement('hr', {}),
        React.createElement('img', { src: url_photo.link[0], className: 'img-responsive' }),
        React.createElement('a', { href: url.link[1], target: '_blank' }, 'Floyd Mayweather laughs at Dana White’s offer for Conor McGregor fight.')
      )
    )
  )
}

module.exports = Sport
