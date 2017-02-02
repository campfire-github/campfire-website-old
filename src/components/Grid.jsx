import React from 'react'
import { Link } from 'react-router'

class Grid extends React.Component{
  render() {
    return (
      <div className="Grid col-md-3 col-sm-12 col-xs-12">
        <Link href={this.props.url} target="_blank">
          <h2>{this.props.title}</h2>
        </Link>
        <p>{this.props.description}</p>
        <img className="col-md-12 col-sm-12 col-xs-12" src={this.props.urlToImage}></img>
      </div>
    )
  }
}

export default Grid
