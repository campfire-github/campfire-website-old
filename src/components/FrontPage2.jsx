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
      technology :[],
      reddit : [],
      gaming:[],
      sport:[]
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
        var json = JSON.parse(result);
        var e = [] ;
        var w = [] ;
        var t = [] ;
        var r = []; //reddit
        var s = []; //sport
        var g =[]; //gaming
        this.setState({head:result[0].title});
        for (var i = 0; i<json.length; i++){
            if( json[i].source === "google-news"){
              w.push(json[i]);
            }else if (json[i] .source === "techcrunch"){
              t.push(json[i]);
            }else if(json[i] .source === "entertainment-weekly"){
              e.push(json[i]);
            }
            else if(json[i] .source === "reddit-r-all"){
              r.push(json[i]);
            }else if(json[i] .source === "ign"){
              g.push(json[i]);
            }else if(json[i] .source === "espn"){
              s.push(json[i]);
            }
        }
        this.setState({world:w});
        this.setState({technology:t});
        this.setState({entertainment:e});
        this.setState({reddit:r});
        this.setState({sport:s});
        this.setState({gaming:g}) ;
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
    }else if(category===4){
      array = this.state.reddit;
    }else if(category===5){
      array = this.state.gaming;
    }else if(category===6){
      array = this.state.sport;
    }

    return array.map((each)=>{
      return (
        <Title title={each.title} url={each.url} key={each.url}></Title>
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
    var reddit = this._getTitleAndLink(4);
    var gaming = this._getTitleAndLink(5);
    var sport = this._getTitleAndLink(6);
    return (
      <div>
        <HeadLine headline = "Categories"/>
        <section className="row">
          <div className ='category col-md-4'>
            <h2>Entertainment</h2>
            {entertainment}
          </div>
          <div className ='category col-md-4'>
            <h2>World</h2>
            {world}
          </div>
          <div className ='category col-md-4'>
            <h2>Technology</h2>
            {technology}
          </div>
          <div className ='category col-md-4'>
            <h2>Reddit</h2>
            {reddit}
          </div>
          <div className ='category col-md-4'>
            <h2>Gaming</h2>
            {gaming}
          </div>
          <div className ='category col-md-4'>
            <h2>Sport</h2>
            {sport}
          </div>
        </section>
      </div>
    )
  }
//
}
export default FrontPage2 ;
