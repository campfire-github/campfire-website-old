import React from 'react';
import { Link } from 'react-router';
import PopupModal from './PopupModal.jsx';
class NavBar extends React.Component{

  constructor(){
    super() ;
    this.state ={
      modalShow : false
    }
  }

  showModalPopup() {
    this.setState({modalShow:true});
    console.log("click");
  }

  childCloseClick(e){
    e.preventDefault()  ;
    this.setState({modalShow:false});
    console.log("close click");
  }

  getModal() {
    if(this.state.modalShow){
      console.log("TrueModal");
      return (<PopupModal modalShow = {this.state.modalShow} onClick={(e) =>this.childCloseClick.bind(this)}></PopupModal>) ;
    }
  }

  render(){

    var popupmodal = this.getModal() ;

    return (

      <nav className="navbar navbar-default navbar-fixed-top ">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <button type="button" className="navbar-toggle collapsed button-search" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" onClick = {this.showModalPopup.bind(this)}> &#128269; </button>
            <a className="navbar-brand" href="/"> CAMPFIRE NEWS</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


              <ul className="nav navbar-nav  navbar-right">
                  <li><a href ="#"className="search" onClick = {this.showModalPopup.bind(this)}> &#128269; </a></li>
                  <li ><Link to="/">Home</Link></li>
                  <li ><Link to="/world">World</Link></li>
                  <li ><Link to="/sport">Sport</Link></li>
                  <li ><Link to="/technology">Technology</Link></li>
                  <li ><Link to="/entertainment">Entertainment</Link></li>
                  <li ><Link to="/gaming">Gaming</Link></li>
                  <li className="dropdown">
                    <a href= "#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li ><Link to="/new-scientist">New Scientist</Link></li>
                      <li ><Link to="/national-geographic">National-Geographic</Link></li>
                      <li ><Link to="/time">Time</Link></li>
                      <li ><Link to="/mtv">MTV</Link></li>
                      <li role="separator" className="divider"></li>
                      <li ><Link to="/hacker-news">Hacker-News</Link></li>
                    </ul>
                  </li>
                  <li className = "nav-li"><a href="#">Contact Us</a></li>

              </ul>
          </div>


        </div>
        {popupmodal}
      </nav>


    )

  }
}
export default NavBar;
