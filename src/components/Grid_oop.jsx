import React from 'react'

class Grid extends React.Component{
  render() {
    return (
      <div className = "col-md-3">
        <a href = {this.props.url}>
          <h2>{this.props.title}</h2>
        </a>
        <p>{this.props.description}</p>
        <img className = "col-md-12" src = {this.props.urlToImage}></img>
      </div>
    )
  }
}

export default Grid ;
