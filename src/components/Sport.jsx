import React from 'react'
import HeadLine from './HeadLine.jsx'
import Grid from './Grid.jsx'
//import jQuery from '../../dist/js/jquery-3.1.1.js'
import request from 'superagent'
class Sport extends React.Component{

  constructor() {
    super() ;
    this.state = {
      all : []
    }
  }

  _fetchNews(){
    const url =  'http://www.campfire.news'
    console.log('fetching news')
    request
      .get('http://www.campfire.news/api/v1/newsnow')
      .set('Accept', 'application/json')
      .end (function(err,res){
        if(!err){

          console.log(res);
          var array = [] ;
          console.log( res.text.length + "length " + Object.keys(res.text));
          for (var i = 0; i<res.text.length; i++){
            console.log( "re "+res.text[i].source );
              if( res.text[i].source === "bbc-sport"){

                array.push(res[i]);
              }
          }console.log("aaa" + array );
          this.setState({all:array});
        }else {
          console.log('error :(', err);
        }
      })

  }

  _getAllNews() {
    console.log("get all ");
    return this.state.all.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.url}></Grid>
      );
    });
  }


  componentWillMount() {
    this._fetchNews() ;
  }

  componentDidMount() {
    this._timer = setInterval(
                  ()=>this.fetchNews(),
                  60000);
  }

  componentWillUnmount(){ // memory leak solving
    clearInterval(this._timer);
  }

  render() {
    var allnews = this._getAllNews() ;
    return(
      <div>
        <h1>Sport</h1>
        <section className="row">
          {allnews}
        </section>
      </div>
    )
  }

  _getAllNews() {
    console.log("get all ");
    return this.state.all.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.id}></Grid>
      );
    });
  }
}
export default Sport ;
