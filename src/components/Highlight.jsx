import React from 'react' ;
import HighlightCard from './HighlightCard.jsx';
import jQuery from '../../dist/js/jquery-3.1.1.js';


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

class Highlight extends React.Component{
    constructor() {
        super() ;
        this.state = {
          currentNews : 0  ,
          highlightArray: [{title:"", url:""},{title:"", url:""}]
        }
      };


    componentWillMount(){
      this._getHighlightnews() ;
    }

    componentDidMount(){

      this._timer = setInterval(
                    ()=>this._getNextHighlight(),
                    10000);
      }
      componentWillUnmount(){ // memory leak solving
        clearInterval(this._timer);
      }
    _getNextHighlight(){
        this.setState({ currentNews: (this.state.currentNews + 1) % this.state.highlightArray.length });
    }


    _getHighlightnews(){
      var urllink = "http://www.campfire.news/api/v1/search/highlightnews";
      jQuery.ajax({
        method:'GET',
        url: urllink,
        beforeSend: function (xhrObj) {
           xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        data:"{body}",
        success :(result)=>{
          console.log("result "+ result);
          var json = JSON.parse(result);
          var array = [] ;
          for (var i = 0; i<json.length; i++){
            array.push(json[i]);
          }
          this.setState({highlightArray:array});
        }
      })
    }


  render() {
    var mobile = isMobile.any() ;
    var a =this.state.highlightArray[this.state.currentNews];
    console.log("a " + this.state.highlightArray  + "-" +this.state.currentNews);
    if( mobile === null){
      return (
        <div className = "col-md-12">
            <HighlightCard title={a.title} url={a.url} urlToImage={a.urltoimage}  description={a.description}></HighlightCard>
        </div>
      )

    }else {
      return (<div></div>)
    }


  }
}

export default Highlight ;
