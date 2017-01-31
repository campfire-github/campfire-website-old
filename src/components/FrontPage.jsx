import React from 'react';
import Entertainment from './Entertainment.jsx';
import Technology from './Technology.jsx';
import World from './World.jsx';
import HeadLine from './HeadLine_oop.jsx';
import Grid from './Grid_oop.jsx';
import Title from './Title.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js';

class FrontPage extends React.Component{
  constructor() {
    super() ;
    this.state = {
      entertainment:[],
      world:[],
      technology :[]


    }
  }

  componentWillMount() {
    var link = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=a4e9c4eb35084632a61272444aad8afb';
    this._fetchNews(link , 1);
    this._fetchNews(link,2);
    this._fetchNews(link,3);
  }

  _fetchNews(categoryLink, category){
    console.log('fetching news')
    var urllink = categoryLink ;
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
        if(category ===1 ){
          this.setState({entertainment:array});
        }else if(category ===2){
          this.setState({world:array});
        }else if(category ===3){
          this.setState({technology:array});
        }


        console.log(result) ;
      }
    })
  }

  _getTitleAndLink(category){
    var array = [];
    if(category ===1 ){
      array = this.state.entertainment;
    }else if(category===2){
      array = this.state.world;
    }else if(category===3){
      array = this.state.technology;
    }
    return array.map((each)=>{
      return (
        <Title title={each.title}  url={each.url} key={each.id}></Title>
      )

    });








  }


  render() {

    var entertainment = this._getTitleAndLink( 1);
    var world = this._getTitleAndLink(2);
    var technology = this._getTitleAndLink(3);

    return (
      <div>
        <HeadLine headline = "This is front page"/>
        <section className="row">
          <div className ='col-md-6'>
            <h2>Entertainment</h2>
            {entertainment}
          </div>
          <div className ='col-md-6'>
            <h2>World</h2>
            {world}
          </div>
          <div className ='col-md-6'>
            <h2>Technology</h2>
            {technology}
          </div>


        </section>
      </div>


    )
  }



}
export default FrontPage ;
