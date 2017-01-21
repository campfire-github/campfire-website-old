import React from 'react'
import {Link} from 'react-router'

export default function Header() {
  return (
    <div>
      <header>
        <h1><Link to="/">campfire news</Link></h1>
      </header>
    </div>
  )
}
