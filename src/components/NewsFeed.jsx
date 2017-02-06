import React from 'react'
import HeadLine from './HeadLine.jsx'
import Grid from './Grid.jsx'
//import FrontPage from './FrontPage.jsx'
import FrontPage2 from './FrontPage2.jsx'
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
    var urllink = 'http://www.campfire.news/api/v1/newsnow';
    jQuery.ajax({
      method:'GET',
      url: urllink,
      beforeSend: function (xhrObj) {
         xhrObj.setRequestHeader("Content-Type", "application/json");
      },
      data:"{body}",
      success :(result)=>{
        var json = JSON.parse(result);
        var array = [] ;
        console.log("log "+json[0]);
        console.log("key"+Object.keys(json[0]));
      //  console.log ( result.length + "size ");
        this.setState({head:json[0].title});
        //console.log("head "+result.articles[0].title);
        for (var i = 0; i<10; i++){
            var each = {
              author : json[i].author,
              title : json[i].title,
              description : json[i].description,
              url : json[i].url,
              urlToImage : json[i].urltoimage,
              publishedAt: json[i].publishedat
            };
            //*/

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
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.url}></Grid>
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

        <FrontPage2></FrontPage2>
      </div>
    )
  }
}

export default NewsFeed ;
