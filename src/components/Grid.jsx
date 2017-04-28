import React from 'react'


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

class Grid extends React.Component{

  _toRender() {
    var rand = Math.floor((Math.random() * 10) + 1);
    var mobile = isMobile.any() ;
    console.log(isMobile.any() + " Mobilee " + rand);
    if(mobile === null ){
      console.log("null < 4 ")
      return (
        <div>
          <img className="grid-img col-md-3 col-sm-3 col-xs-3" src={this.props.urlToImage}  ></img>
          <a className="grid-a col-md-9 col-sm-9 col-xs-9" href={this.props.url} target="_blank">
            <h4 className = "grid-h4">{this.props.title}</h4>
          </a>
          <div className= "popup-description">
            <img className="grid-img col-md-12 col-sm-12 col-xs-12" src={this.props.urlToImage}  ></img>
            <p>{this.props.description}</p>

          </div>
        </div>


      )
    }else {
      if(rand >3){
        return (
          <div>
            <a className="grid-a col-md-9 col-sm-9 col-xs-12" href={this.props.url} target="_blank">
              <h4 className = "grid-h4">{this.props.title}</h4>
            </a>
          </div>
        )
      }else {
        return (
          <div>
            <img className="grid-img col-md-3 col-sm-3 col-xs-3" src={this.props.urlToImage}  ></img>
            <a className="grid-a col-md-9 col-sm-9 col-xs-9" href={this.props.url} target="_blank">
              <h4 className = "grid-h4">{this.props.title}</h4>
            </a>
          </div>


        )
      }
    }
  }

  render() {
    var div= this._toRender() ;
    //console.log ( "image url "+ this.props.urlToImage);
    return(
      <div className="Grid col-md-4 col-sm-6 col-xs-12">
        {div}
      </div>
    )

  }
}

export default Grid
