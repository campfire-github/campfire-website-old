import React from 'react'
import Header from './Header.jsx'
import Contact from './Contact.jsx'
import NewsFeed from './NewsFeed_oop.jsx'
import Footer from './Footer.jsx'

const App = () => (
  <div className="container-fluid">
    <Header />
    <div className="container">
      <NewsFeed />
    </div>
    <Footer />
  </div>
)

export default App
