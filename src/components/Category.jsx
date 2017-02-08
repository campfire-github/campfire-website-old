import React from 'react'  ;

class Category extends React.Component{

  constructor(){
    super() ;
    this.state = {
      all: []
    }
  }

  _getTitleAsLink() {
    return all.map((each)=>{
      return (
        <Title title={each.title} url={each.url} key={each.url}></Title>
      )
    });
  }


  render() {
    this.setState({all:this.props.array});
    var title = this._getTitleAsLink() ;
    return(
      <div className ='category col-md-4'>
        <h2>this.props.categoryname</h2>
        {title}
      </div>

    )


  }



}
export default Category ;
