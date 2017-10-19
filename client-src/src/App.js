import React from 'react';
import {Link} from 'react-router-dom'; 
import Main from './Components/Main';
import NavBar from './Components/Navbar'; 


import './App.css';

const App = () => (
  <div>
    <NavBar/>

    <div className="container">
      <Main/>
    </div>
    <div className="fixed-action-btn">
      <Link to="/hangoutz/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>  

  </div>
)

  


export default App;
