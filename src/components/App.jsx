import React from 'react'
import Header from './Header.jsx'
import Contact from './Contact.jsx'
import NewsFeed from './NewsFeed.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <NewsFeed />
      </div>
      <Footer />
    </div>
  )
}
