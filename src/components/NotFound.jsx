import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <ul>
        <li><Link to="/">go back home</Link></li>
      </ul>
    </div>
  )
}

export default NotFound
