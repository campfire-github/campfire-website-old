import React from 'react'

class Grid extends React.Component{




  render() {
    //console.log ( "image url "+ this.props.urlToImage);
    return (
      <div className="Grid col-md-4 col-sm-6 col-xs-12">
        <img className="grid-img col-md-3 col-sm-3 col-xs-3" src={this.props.urlToImage}  ></img>
        <a className="grid-a col-md-9 col-sm-9 col-xs-9" href={this.props.url} target="_blank">
          <h4 className = "grid-h4">{this.props.title}</h4>
        </a>
      </div>
    )
  }
}

export default Grid
