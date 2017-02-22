import React from 'react'
import HeadLine from './HeadLine.jsx'
import Grid from './Grid.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'
class Technology extends React.Component{

  constructor() {
    super() ;
    this.state = {
      techHeadlind : [],
      tech : []
    }
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
        var json = JSON.parse(result);
        var all = [] ;
        for (var i = 0; i<json.length; i++){
            if( json[i].source === "techcrunch"){
              all.push(json[i]);
            }
        }
        this.setState({tech:all});
      }
    })
  }

  _getAllNews() {
    console.log("get all ");
    return this.state.tech.map((each)=>{
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
    var alltech = this._getAllNews() ;
    return(
      <div>
        <h1>Technology</h1>
        <section className="row">
          {alltech}
        </section>
      </div>
    )
  }

  _getAllTech() {
    console.log("get all ");
    return this.state.tech.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.id}></Grid>
      );
    });
  }
}
export default Technology ;
