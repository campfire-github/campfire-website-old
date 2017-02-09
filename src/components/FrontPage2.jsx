import React from 'react';
import Entertainment from './Entertainment.jsx';
import Technology from './Technology.jsx';
import World from './World.jsx';
import HeadLine from './HeadLine.jsx';
import Grid from './Grid.jsx';
import Title from './Title.jsx'
import Category from './Category.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js';

class FrontPage2 extends React.Component{
  constructor() {
    super() ;
    this.state = {
      entertainment:[],
      world:[],
      technology :[],
      time : [],
      gaming:[],
      sport:[],
      nationalGeographic:[],
      hackerNews:[],
      mtvNews:[]
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
        var e = [] ;//entertainment
        var w = [] ;//world
        var t = [] ;//technology
        var ti = []; //reddit
        var s = []; //sport
        var g =[]; //gaming
        var geo = [];//national-geographic
        var hacker = []; // hacker-news
        var mtv = [];//mtv-news
        this.setState({head:result[0].title});
        for (var i = 0; i<json.length; i++){
            if( json[i].source === "google-news"){
              w.push(json[i]);
            }else if (json[i] .source === "techcrunch"){
              t.push(json[i]);
            }else if(json[i] .source === "entertainment-weekly"){
              e.push(json[i]);
            }else if(json[i] .source === "time"){
              ti.push(json[i]);
            }else if(json[i] .source === "ign"){
              g.push(json[i]);
            }else if(json[i] .source === "bbc-sport"){
              s.push(json[i]);
            }else if(json[i] .source === "national-geographic"){
              geo.push(json[i]);
            }else if(json[i] .source === "hacker-news"){
              hacker.push(json[i]);
            }else if(json[i] .source === "mtv-news"){
              mtv.push(json[i]);
            }
        }
        this.setState({world:w});
        this.setState({technology:t});
        this.setState({entertainment:e});
        this.setState({time:ti});
        this.setState({sport:s});
        this.setState({gaming:g}) ;
        this.setState({hackerNews:hacker});
        this.setState({nationalGeographic:geo});
        this.setState({mtvNews:mtv});
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
      array = this.state.time;
    }else if(category===5){
      array = this.state.gaming;
    }else if(category===6){
      array = this.state.sport;
    }else if(category===7){
      array = this.state.nationalGeographic;
    }else if(category===8){
      array = this.state.hackerNews;
    }else if(category===9){
      array = this.state.mtvNews;
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
    var time = this._getTitleAndLink(4);
    var gaming = this._getTitleAndLink(5);
    var sport = this._getTitleAndLink(6); //
    var nationalgeo = this._getTitleAndLink(7);
    var hackernews = this._getTitleAndLink(8);
    var mtvnews = this._getTitleAndLink(9);
    return (
      <div>
        <HeadLine headline = "Categories"/>
        <section className="row">
          <Category categoryname ="Entertainment" arrays={this.state.entertainment} ></Category>
          <Category categoryname ="World" arrays={this.state.world} ></Category>
          <Category categoryname ="Technology" arrays={this.state.technology} ></Category>
        </section>
        <section className="row">
          <Category categoryname ="Time" arrays={this.state.time} ></Category>
          <Category categoryname ="Gaming" arrays={this.state.gaming} ></Category>
          <Category categoryname ="Sport" arrays={this.state.sport} ></Category>
        </section>
        <section className="row">
        
          <Category categoryname ="Music" arrays={this.state.mtvnews} ></Category>
        </section>

      </div>
    )
  }
}
export default FrontPage2 ;
