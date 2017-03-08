import React from 'react';
import Entertainment from './Entertainment.jsx';
import Technology from './Technology.jsx';
import World from './World.jsx';
import HeadLine from './HeadLine.jsx';
import Grid from './Grid.jsx';
import Title from './Title.jsx'
import Category from './Category.jsx'
import Weather from './Weather.jsx'
import { Link } from 'react-router'
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
    console.log("refreshing frontpage");
    this._timer = setInterval(
                  ()=>this._fetchNews(),
                  300000);
    }
    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }

  _fetchNews(){
    console.log('fetching news frontpage')
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
        var ti = []; //time
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

  render() {
    return (
      <div>
        <section className="row">
          <Category categoryname ="World" arrays={this.state.world} ></Category>
          <Category categoryname ="Sport" arrays={this.state.sport} ></Category>
          <Category categoryname ="Technology" arrays={this.state.technology} ></Category>
        </section>
        <section className="row">
          <Category categoryname ="Entertainment" arrays={this.state.entertainment} ></Category>
          <Category categoryname ="Gaming" arrays={this.state.gaming} ></Category>
          <Category categoryname ="Nation-Geographic" arrays={this.state.nationalGeographic} ></Category>
        </section>
        <section className="row">
          <Category categoryname ="Time" arrays={this.state.time} ></Category>    
          <Category categoryname ="Hacker-News" arrays={this.state.hackerNews} ></Category>
          <Category categoryname ="Mtv" arrays={this.state.mtvNews} ></Category>
        </section>
      </div>
    )
  }
}
export default FrontPage2 ;
