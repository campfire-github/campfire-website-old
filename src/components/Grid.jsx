import React from 'react'

class Grid extends React.Component{


  _handleClick (e){
     console.log(e.button);
     if((e.button == 2)){
      return false ;

     }
   }


  render() {
    console.log ( "image url "+ this.props.urlToImage);
    return (
      <div className="Grid col-md-4 col-sm-12 col-xs-12">
        <img className="col-md-3 col-sm-3 col-xs-3" src={this.props.urlToImage} onClick={this._handleClick.bind(this)} ></img>
        <a className="col-md-9 col-sm-9 col-xs-9" href={this.props.url} target="_blank">
          <h4 className = "grid-h4">{this.props.title}</h4>
        </a>


      </div>
    )
  }
}

export default Grid
