import React from 'react'  ;
import Title from './Title.jsx'

class Category extends React.Component{

  constructor(){
    super() ;
    this.state = {
      all: []
    }
  }

  componentWillMount() {
    this.setState({all:this.props.array});
  }

  _getTitleAsLink() {
    return this.state.all.map((each)=>{
      return (
        <Title title={each.title} url={each.url} key={each.url}></Title>
      )
    });
  }



  render() {

    var title = this._getTitleAsLink() ;
    console.log("TITLE " + title);
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
