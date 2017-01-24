var React = require('react')
var Link = require('react-router').Link
var Header = require('./Header.js')

var w = window.innerWidth
var h = window.innerHeight

function SecretLink(props) {
  return (
    React.createElement('div', {},
      React.createElement(Header, {}),
      React.createElement('iframe', { src: props.url, width: w, height: h })
    )
  )
}

module.exports = SecretLink
