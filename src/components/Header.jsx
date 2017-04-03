import React from 'react'
import { Link } from 'react-router'
import Navbar from './NavBar.jsx'

const Header = () => (
  <div>
    <header>
      <NavBar></NavBar>
      <h1><Link to="/">campfire news</Link></h1>

    </header>
  </div>
)

export default Header
