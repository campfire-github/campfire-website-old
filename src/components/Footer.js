var React = require('react')
var Link = require('react-router')

function Footer() {
  return (
    React.createElement('div', {},
      React.createElement('footer', { className: 'campfire_footer' },
        React.createElement('p', {}, '\u00A9 2017 Campfire Limited, all rights reserved. Campfire logo is trademarks and/or registered trademarks of Campfire Limited')
      )
    )
  )
}

module.exports = Footer
