import React from 'react'
import request from 'superagent'
import { Link } from 'react-router'

import HeadLine from './HeadLine.jsx'

const NewsFeed = () => {
  const getNews = () => {
    const url = 'http://localhost:8080' || 'http://www.campfire.news'
    const news = []
    request
      .get(url + '/api/v1/news')
      .set('Accept', 'application/json')
      .end((err, res) => (!err ? news.push(res.body.articles) : console.log('error :(', err)))
    return news[0]
  }

  const getHeadLine = headline => (
    headline.map(headline => (
      <HeadLine url={headline.url} title={headline.title} />
    ))
  )

  const getArticle = articles => (
    articles.map(articles => (
      <article className="col-md-3">
        <Link href={articles.url} target="_blank">
          <h2>{articles.title}</h2>
        </Link>
        <p>{articles.description}</p>
        <img className="col-md-12" src={articles.urlToImage}></img>
      </article>
    ))
  )

  const article = getArticle(getNews())
  const headline = getHeadLine(getNews())

  return (
    <div>
      {headline}
      <section className="row">
        {article}
      </section>
    </div>
  )
}

export default NewsFeed
