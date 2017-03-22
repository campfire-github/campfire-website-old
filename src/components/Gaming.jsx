import React from 'react' ;
import Grid from './Grid.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: 10
};
var style = {
  backgroundColor : '#d9dde2' ;
};
class Gaming extends React.Component{

  constructor() {
    super() ;
    this.state = {
      GamingHeadlind : [],
      all : []
    }
  }




  _fetchNews(){
    console.log('fetching news')
    var urllink = "http://www.campfire.news/api/v1/ign/ign";
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
        for (var i = 0; i<json.length; i++){
            if( json[i].source === "ign" || json[i].source === "mtv-news"){
              array.push(json[i]);
            }
        }
        this.setState({all:array});
      }
    })
  }

  _getAllNews() {
    console.log("get all ");
    return this.state.all.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urltoimage} key={each.url}></Grid>
      );
    });
  }


  componentWillMount() {
    this._fetchNews() ;
  }

  componentDidMount() {
    this._timer = setInterval(
                  ()=>this._fetchNews(),
                  1001000);
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
          <h1>Gaming</h1>
          <section className="row">
            <Masonry className={'my-gallery-class'} style={style} >
                  {allnews}
            </Masonry>
          </section>
        </div>
        <Footer />
      </div>
    )
  }


}
export default Gaming  ;
