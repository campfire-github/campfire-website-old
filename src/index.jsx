import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

//components
import App from './components/App.jsx'
import Technology from './components/Technology.jsx'
import World from './components/World.jsx'
import Entertainment from './components/Entertainment.jsx'
import Sport from './components/Sport.jsx'
import NewsFeedFun from './components/NewsFeed_fun.jsx'
import Gaming from './components/Gaming.jsx'
import NationalGeographic from './components/NationalGeographic.jsx'
import Time from './components/Time.jsx'
import Mtv from './components/Mtv.jsx'
import HackerNews from './components/HackerNews.jsx'
import NewScientist from './components/NewScientist.jsx'
import Todaynews from './components/Todaynews.jsx'

import NotFound from './components/NotFound.jsx'



render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />

    <Route path="/entertainment" component={Entertainment} />
    <Route path="/technology" component={Technology} />
    <Route path="/sport" component={Sport} />
    <Route path="/world" component={World} />
    <Route path="/gaming" component={Gaming}/>
    <Route path="/national-geographic" component={NationalGeographic}/>
    <Route path="/time" component={Time}/>
    <Route path="/hacker-news" component={HackerNews}/>
    <Route path="/mtv" component={Mtv}/>
    <Route path="/newsfeedfun" component={NewsFeedFun} />
    <Route path="/new-scientist" component= {NewScientist} />
    <Route path="/todaynews" component= {Todaynews} />
    <Route path="/*" component={NotFound} />

  </Router>
), document.getElementById('app'))
