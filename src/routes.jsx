import React from 'react'
import {Route, IndexRoute} from 'react-router'

// Components
import Layout from './components/Layout.jsx'
import NewsFeed from './components/NewsFeed.jsx'
import NotFound from './components/NotFound.jsx'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={NewsFeed} />
    <Route path="/*" component={NotFound} />
  </Route>
)
