import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <ul>
        <li><Link to="/">go back home</Link></li>
      </ul>
    </div>
  )
}

module.exports = NotFound
