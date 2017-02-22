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
        this.setState({technology:tech});
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
  componentDidMount() {}

  render() {
    var alltech = this._getAllNews() ;
    console.log(this.props.whatis);
    return(
      <div>
        <HeadLine headline = "Technology Stuff"/>
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
