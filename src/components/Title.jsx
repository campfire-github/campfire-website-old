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
          <h4 className= "title">{this.props.title}</h4>
        </a>
      </div>
    )
  }




}

export default Title ;
