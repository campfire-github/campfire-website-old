import React from 'react';
import Entertainment from './Entertainment.jsx';
import Technology from './Technology.jsx';
import World from './World.jsx';
import HeadLine from './HeadLine.jsx';
import Grid from './Grid.jsx';
import Title from './Title.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js';

class FrontPage2 extends React.Component{
  constructor() {
    super() ;
    this.state = {
      entertainment:[],
      world:[],
      technology :[]
    }
  }

  componentWillMount() {
    this._fetchNews();
  }

  componentDidMount(){
    console.log("refreshing news");
    this._timer = setInterval(
                  ()=>this._fetchNews(),
                  600000);
    }

    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }

  _fetchNews(){
    console.log('fetching news')
    var urllink = "http://www.campfire.news/api/v1/newsnow";
    jQuery.ajax({
      method:'GET',
      url: urllink,
      beforeSend: function (xhrObj) {
         xhrObj.setRequestHeader("Content-Type", "application/json");
      },
      data:"{body}",
      success :(result)=>{
        var e = [] ;
        var w = [] ;
        var t = [] ;
        this.setState({head:result.articles[0].title});
        for (var i = 0; i<result.articles.length; i++){
            var each = {
              id : i ,
              source: result[i].source ,
              author : result[i].author,
              title : result[i].title,
              description : result[i].description,
              url : result[i].url,
              urlToImage : result[i].urlToImage,
              publishedAt: result[i].publishedAt
            };
            if( each.source === "google-news"){
              w.push(each);
            }else if (each.source === "techcrunch"){
              t.push(each);
            }else if(each.source === "entertainment-weekly"){
              e.push(each);
            }
        }
        this.setState({world:w});
        this.setState({technology:t});
        this.setState({entertainment:e});
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
        <Title title={each.title} url={each.url} key={each.id}></Title>
      )
    });

  }

  _technologyLinkClick() {
    <Technology tech={this.state.technology}></Technology>
  }
  _worldLinkClick(){
    <World world={this.state.world}></World>
  }
  _entertainmentLinkClick() {
    <Entertainment entertainment={this.state.entertainment}></Entertainment>
  }

  render() {
    var entertainment = this._getTitleAndLink( 1);
    var world = this._getTitleAndLink(2);
    var technology = this._getTitleAndLink(3);
    return (
      <div>
        <HeadLine headline = "Categories"/>
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
//
}
export default FrontPage2 ;
