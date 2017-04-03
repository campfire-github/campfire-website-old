import React from 'react';
import { Link } from 'react-router';
class NavBar extends React.Component{


  render(){
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
            <a className="navbar-brand" href="/"> CAMPFIRE NEWS</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


              <ul className="nav navbar-nav  navbar-right">

                  <li classname = "nav-li"><Link to="/world">World</Link></li>
                  <li classname = "nav-li"><a href="#">triplab</a></li>
                  <li className="dropdown">
                    <a href= "#" className="dropdown-toggle nav-li" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contact<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Address</a></li>
                      <li><a href="#">Phone</a></li>
                      <li><a href="#">Something else</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Business hours</a></li>
                    </ul>
                  </li>
                  <li classname = "nav-li"><a href="#">Link</a></li>

              </ul>
          </div>


        </div>
      </nav>


    )

  }
}
export default NavBar;
