import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 

class NavBar extends Component {
    render() {
        return (
            <div>
            <nav className="purple darken-3">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo center">
                  Hangoutz
                </a>
                <a  data-activates="main-menu" className="button-collapse show-on-large">
                  <i className="fa fa-bars"></i>
                </a>
                <ul className="right hide-on-small-only">
                  <li>
                    <Link to="/"><i className=" fa fa-users"></i>Hangouts</Link>
                  </li>
                </ul>
                <ul className="side-nav" id="main-menu">
                 <li>
                    <Link to="/"><i className=" fa fa-users"></i>Hangouts</Link>
                 </li>
                 <li>
                    <Link to="/hangouts/add"><i className=" fa fa-plus"></i>Add Hangouts</Link>
                 </li>
                 <li>
                    <Link to="/about"><i className=" fa fa-question-circle"></i>About</Link>
                 </li>
                  
                </ul>
              </div>
            </nav>
          </div>
        );
    }
}

export default NavBar; 