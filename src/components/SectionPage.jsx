import React from 'react' ;
import Grid from './Grid.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'
import Masonry from 'react-masonry-component';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');


var masonryOptions = {
    transitionDuration: 10
};

class SectionPage extends React.Component{
    constructor() {
      super() ;
      this.state = {
        headline : [],
        all : [],
        count: 40
      }
    }

    _getMore() {
      var c = this.state.count +40 ;
      console.log("c :"+ c);
      this.setState({count: c})
      console.log(this.state.count);
      this._fetchNews(this.props.url,c);
    }

    _fetchNews(url,count){
      console.log('fetching news')
      var urllink = url+"/"+count;
      jQuery.ajax({
        method:'GET',
        url: urllink,
        beforeSend: function (xhrObj) {
           xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        data:"{body}",
        success :(result)=>{
          //console.log(result);
          var json = JSON.parse(result);
          var array = [] ;
          for (var i = 0; i<json.length; i++){
            //  if( json[i].source === "entertainment-weekly" || json[i].source === "mtv-news"){
                array.push(json[i]);
              //}
          }

          this.setState({all:array});
        }
      })
    }


    _getAllNews() {
      console.log("get all ");
      return this.state.all.map((each)=>{
        var unixtime = Date.parse(each.insertdate)/1000 ;
        console.log(unixtime +"-"+ each.insertdate )
        return(
          <Grid title={each.title} description={each.description} url={each.url} page1={this.props.page1} urlToImage={each.urltoimage} key={each.url} ></Grid>
        );
      });
    }


    componentWillMount() {
      var url = this.props.url ;
      this._fetchNews(url,this.state.count) ;
    }

    componentDidMount() {
      this._timer = setInterval(
                    ()=>this._fetchNews(this.props.url,this.state.count),
                    90000);
    }

    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }

    render() {
      var allnews = this._getAllNews() ;

      return(
        <div className="container-fluid">
          <Header />
          <div className="container">
              <h1>{this.props.pagename}</h1>
              <FacebookShareButton
                url={this.props.page1}
                title={"Get all latest news on Campfire.news"}
                picture={"./google.png"}
                className="Demo__some-network__share-button">

                <FacebookIcon size={32} round />
               </FacebookShareButton>
              <section className="row">
              <Masonry className={'my-gallery-class'}  >
                    {allnews}
              </Masonry>

              </section>
            <button className = "col-md-12 col-sm-12 col-md-12" onClick= {this._getMore.bind(this)}>More</button>
          </div>
          <Footer />
        </div>
      )
    }




}
export default SectionPage ;
