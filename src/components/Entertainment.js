var React = require('react')
var Link = require('react-router').Link

var url = {
  link: [
    'http://www.businessinsider.com.au/story-snap-ceo-evan-spiegel-fabulous-life-snapchat-miranda-kerr-2017-1?r=US&IR=T',
    'http://www.dailymail.co.uk/tvshowbiz/article-4120892/Mark-Hamill-reads-Donald-Trump-tweet-using-Joker-voice-hilarious-audio-clip-Meryl-Streep-Golden-Globes-speech.html'
  ]
}

var url_photo = {
  link: [
  ]
}

function Entertainment() {
  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('h2', { className: 'entertainment' }, 'Entertainment | Dailymail'),
        React.createElement('a', { href: url.link[0], target: '_blank' }, 'Chris Pratt shares behind-the-scenes look at how his team of make-up artists transformed him for Passengers'),
        React.createElement('hr', {}),
        React.createElement('a', { href: url.link[1], target: '_blank' }, 'Mark Hamill reads Donald Trump tweet using The Joker voice in hilarious audio clip after Meryl Streep Golden Globes speech')
      )
    )
  )
}

module.exports = Entertainment
