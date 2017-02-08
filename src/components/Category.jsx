import React from 'react'  ;
import Title from './Title.jsx'

class Category extends React.Component{

  constructor(){
    super() ;
    this.state = {
      all: []
    }
  }

  _getTitleAsLink() {

    var a = this.state.all ;
    console.log("a" + a );
    return a.map((each)=>{
      return (
        <Title title={each.title} url={each.url} key={each.url}></Title>
      )
    });
  }

  componentWillMount(){
    this.setState({all:this.props.arrays});
  }

  render() {

    var title = this._getTitleAsLink() ;
    console.log(this.props);
    return(
      <div className ='category col-md-4'>
        <h2>{this.props.categoryname}</h2>
        {title}
      </div>

    )


  }



}
export default Category ;
