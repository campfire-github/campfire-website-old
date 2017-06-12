import React from 'react';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
   TwitterShareButton,
   LinkedinShareButton
} = ShareButtons;


const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');

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

  _headline(id ){

    var data1 ={
      'id': id
    };


    var urllink = "http://www.campfire.news/api/headline/"+id
    jQuery.ajax({
      method:'GET',
      url: urllink,
      beforeSend: function (xhrObj) {
         xhrObj.setRequestHeader("Content-Type", "application/json");
      },
      data:data1,
      success :(result)=>{
        //console.log(result);

        console.log(result) ;
      }
    })

  }

  _headlineUpdate(id ){

    var data1 ={
      'id': id
    };


    var urllink = "http://www.campfire.news/api/headlineUpdate"
    jQuery.ajax({
      method:'POST',
      url: urllink,
      dataType: 'json',
      data : JSON.stringify({ "id": id}),
      contentType: "application/json",
      success :(result)=>{
        //console.log(result);

        console.log(result) ;
      }
    })

  }

  _toRender() {
    var rand = Math.floor((Math.random() * 10) + 1);
    var mobile = isMobile.any() ;
    console.log(isMobile.any() + " Mobilee " + rand);
    console.log ( this.props.page1 +" is page to go "+ this.props.url);
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
            <div className ="share col-md-12">
                <p className = "share-txt col-md-2">Share</p>
                <div className = "col-md-2">
                  <FacebookShareButton className = "share-icon col-md-2"
                    url={this.props.url}
                    title={this.props.title + " ---shared by campfire.news"}
                    picture={this.props.urlToImage}
                    description ={this.props.description}
                    className="Demo__some-network__share-button">
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                 </div>
                 <div className = "col-md-2">
                   <TwitterShareButton className = "share-icon col-md-2"
                     url={this.props.url}
                     title={this.props.title}
                     picture={this.props.urlToImage}
                     via ={"campfire.news"}
                     hashtag = {"campfirenews"}
                     className="Demo__some-network__share-button">
                     <TwitterIcon size={32} round />
                   </TwitterShareButton>

                  </div>
                  <div className = "col-md-2">
                    <LinkedinShareButton className = "share-icon col-md-2"
                      url={this.props.url}
                      title={this.props.title}
                      picture={this.props.urlToImage}
                      className="Demo__some-network__share-button">
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <button onClick={this._headline.bind(this,this.props.id)}>plus</button>
                    <button onClick={this._headlineUpdate.bind(this,this.props.id)}>uPDATE</button>
                   </div>
              </div>
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

export default Grid;
