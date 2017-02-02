import React from 'react'
import HeadLine from './HeadLine_oop.jsx'
import Grid from './Grid_oop.jsx'
import FrontPage from './FrontPage.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'

class NewsFeed extends React.Component {
///*
  constructor()  {
    super() ;
    this.state = {
      head: "",
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
        var array = [] ;
        console.log ( result.length + "size ");
        this.setState({head:result.articles[0].title});
        console.log("head "+result.articles[0].title);
        for (var i = 0; i<result.articles.length; i++){
            var each = {
              id : i ,
              author : result.articles[i].author,
              title : result.articles[i].title,
              description : result.articles[i].description,
              url : result.articles[i].url,
              urlToImage : result.articles[i].urlToImage,
              publishedAt: result.articles[i].publishedAt
            };
            array.push(each);
        }
        console.log ( "this array "+ array.length);
        this.setState({all:array});
        console.log(result) ;
      }
    })
  }

  componentWillMount () {
    this._fetchNews();
  }

  /*
  componentDidMount(){
    this._timer = setInterval(
                  ()=>this._fetchNews(),
                  500000);
    }
*/
    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }

  _getAllNews() {
    console.log("get all ");
    return this.state.all.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.id}></Grid>
      );
    });
  }

//*/
  render() {
    console.log(this.state.all.length);
    var allnews = this._getAllNews() ;
    var head = this.state.head ;
    return (
      <div>
        <HeadLine headline = {head}/>
        <section className="row">
          {allnews}
        </section>
        <FrontPage></FrontPage>
      </div>
    )
  }
}

export default NewsFeed ;
