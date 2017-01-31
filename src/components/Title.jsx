import React from 'react';

class Title extends React.Component{

  constructor(){
    super() ;
    this.state = {
      all: []
    }
  }





  render() {


    return (
      <div className = "col-md-12">
        <a href = {this.props.url}>
          <h3>{this.props.title}</h3>
        </a>
      </div>
    )
  }




}

export default Title ;
