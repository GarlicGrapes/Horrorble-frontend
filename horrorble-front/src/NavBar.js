import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {

<div className="navbar">

      <button 
      component={NavLink} 
      to="/" 
      >
        Home 
      </button>

      <button 
      component={NavLink} 
      to="/addmovie" 
      >
       Add Movie 
      </button>

      <button 
      component={NavLink} 
      to="/adddirector" 
      >
      Add Director
      </button>

    </div>
}

export default NavBar;