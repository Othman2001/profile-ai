import React from 'react';
import "../css/nav.css"
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div className="container">
          <div className="row">
              
          </div>
            
          <a class="navbar-brand mr-auto" href="#">Othman</a>
       <div className = "nav">
<nav class="navbar navbar-expand-lg  ml-auto">

  <button class="navbar-toggler white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <Link to = "/">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home</a>
      </li>
      </Link>
    <Link to = "/about">
    <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </Link>
     <Link to = "/work" > 
     <li class="nav-item">
        <a class="nav-link" href="#">Latest Work</a>
      </li>
     </Link>
     <Link to = "/contact">
     <li class="nav-item">
        <a class="nav-link " href="#">Contact</a>
      </li>
     </Link>
     
      
    </ul>
  </div>
</nav>
        </div>
        </div>
 
    )
}
export default Nav;