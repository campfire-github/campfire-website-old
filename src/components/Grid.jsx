import React from 'react'

class Grid extends React.Component{

  render() {


    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.url}</p>
        <img src = {this.props.urlToImage}></img>
      </div>


    )



  }



}
export default Grid ;
