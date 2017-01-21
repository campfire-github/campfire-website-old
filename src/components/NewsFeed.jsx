import React from 'react'
import { Link } from 'react-router'
import request from 'request'

import HeadLine from './HeadLine.jsx'
// var Business = require('./Business.js')
// var Entertainment = require('./Entertainment.js')
// var National = require('./National.js')
// var Sports = require('./Sports.js')
// var Technology = require('./Technology.js')
// var World = require('./World.js')

request('http://www.google.com', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})

export default function NewsFeed() {
  return (
    <div>
      <HeadLine />
      <section className="row">

      </section>
      <section className="row">

      </section>
    </div>
  )
}
