import React from 'react'
import request from 'superagent'
import HeadLine from './HeadLine.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'

const NewsFeed = () => {
  const getRoute = (url, callback) => {
    request
      .get(url)
      .end((error, response) => {
        callback(error, response.body)
      })
  }

  const url = 'http://localhost:8080/api/v1/news' || 'http://www.campfire.news/api/v1/news'
  const news = []

  getRoute(url, (error, response) => {
    console.log(response)
    !err ? news.push(response) : console.log(error)
  })

  return (
    <div>
      <HeadLine url={news[0].articles[0].url} name={news[0].articles[0].title} />
      <section className="row">

      </section>
    </div>
  )
}

export default NewsFeed
