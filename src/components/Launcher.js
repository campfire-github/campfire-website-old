var React = require('react')
var Link = require('react-router').Link
var Header = require('./Header.js')

var w = window.innerWidth
var h = window.innerHeight
var url = 'http://www.drudgereport.com/'

function Launcher() {
  return (
    React.createElement('div', {},
      React.createElement(Header, {}),
      React.createElement('iframe', { src: url, height: h, width: w })
    )
  )
}

module.exports = Launcher
