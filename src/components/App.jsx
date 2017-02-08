import React from 'react'

import Header from './Header.jsx'
import Contact from './Contact.jsx'
import NewsFeed from './NewsFeed.jsx'
import Footer from './Footer.jsx'
import FrontPage2 from './FrontPage2.jsx'

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
