import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
      <footer className="campfire_footer">
        <p>&copy; 2017 Campfire Limited, all rights reserved. Campfire logo is trademarks and/or registered trademarks of Campfire Limited</p>
        <br></br>
        powered by <Link href="https://newsapi.org/">NewsAPI.org</Link>
      </footer>
    </div>
  )
}

export default Footer
