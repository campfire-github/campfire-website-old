import React from 'react'

class Grid extends React.Component{
  render() {
    console.log ( "image url "+ this.props.urlToImage);
    return (
      <div className="Grid col-md-3 col-sm-12 col-xs-12">
        <a href={this.props.url} target="_blank">
          <h2>{this.props.title}</h2>
        </a>
        <p>{this.props.description}</p>
        <img className="col-md-12 col-sm-12 col-xs-12" src={this.props.urltoimage}></img>
      </div>
    )
  }
}

export default Grid
