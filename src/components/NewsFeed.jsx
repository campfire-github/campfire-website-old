import React from 'react'
import HeadLine from './HeadLine.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'

  class NewsFeed extends React.Component {
///*
  constructor()  {
    super() ;
    this.state = {
      all: []
    };
  }

  _fetchNews() {
    console.log('fetching news')
    var urllink = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=a4e9c4eb35084632a61272444aad8afb';
    jQuery.ajax({
      method:'GET',
      url: urllink,
      beforeSend: function (xhrObj) {
         xhrObj.setRequestHeader("Content-Type", "application/json");
      },
      data:"{body}",
      success :(result)=>{


        console.log(result) ;
      }

    })


  }

  componentWillMount () {
    this._fetchNews();
  }

//*/
  render() {
    return (
      <div>
        <HeadLine />
        <section className="row">
        </section>
      </div>
    )
  }
}

export default NewsFeed ;
