import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import logo from '../BarraMenu/logo.png';

function Menu() {
    return (
        <div className='Menu'>



<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
  
   
      <img src={logo} alt="" width="70" height="74"/>
    
  

    <a className="navbar-brand" href="#">Chefs Warehouse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">Soporte</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/Cat1">Mexicanas</a></li>
            <li><a className="dropdown-item" href="/Cat2">Italianas</a></li>
            <li><a className="dropdown-item" href="/Cat3">Another action</a></li>
            <li><a className="dropdown-item" href="/Cat4">Another action</a></li>
            <li><a className="dropdown-item" href="/Cat5">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Alimentacion</a></li>
          </ul>
        </li>



        


        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
























        </div>

        
    )
}

export default Menu