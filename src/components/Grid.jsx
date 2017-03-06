import React from 'react'

class Grid extends React.Component{
  render() {
    console.log ( "image url "+ this.props.urlToImage);
    return (
      <div className="Grid col-md-4 col-sm-12 col-xs-12">
        <img className="col-md-3 col-sm-3 col-xs-3" src={this.props.urlToImage}></img>
        <a  className="col-md-8 col-sm-8 col-xs-8" href={this.props.url} target="_blank">
          <h3>{this.props.title}</h3>
        </a>


      </div>
    )
  }
}

export default Grid
