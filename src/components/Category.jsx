import React from 'react'  ;
import Title from './Title.jsx'
import { Link } from 'react-router'

class Category extends React.Component{ //
  constructor(){
    super() ;
    this.state = {
      all: []
    }
  }

  _getTitleAsLink() {
    var a = this.state.all ;
  //  console.log("a" + a );
    return a.map((each)=>{
      return (
        <Title title={each.title} url={each.url} key={each.url} urlToImage= {each.urltoimage} description={each.description}></Title>
      )
    });
  }

  componentWillMount(){
    this.setState({all:this.props.arrays});
  }

  componentDidMount(){
    console.log("refreshing news");
    this._timer = setInterval(
                  ()=>this.setState({all:this.props.arrays}),
                  1000);
    }

    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }

  render() {
    var title = this._getTitleAsLink() ;
    let page = "/"+this.props.categoryname.toLowerCase() ;
    return(
      <div className ='category col-md-4'>
        <h2><Link to={page}>{this.props.categoryname}</Link></h2>
        {title}
      </div>
    )
  }

}
export default Category ;
