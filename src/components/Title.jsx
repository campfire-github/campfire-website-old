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
      <div className = "title-div col-md-12">
        <a href = {this.props.url}>
          <h4 className= "title-h4">{this.props.title}</h4>
        </a>
      </div>
    )
  }




}

export default Title ;
