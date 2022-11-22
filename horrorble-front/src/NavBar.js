import React from "react";
import {NavLink, Link} from "react-router-dom";

function NavBar() {

return(
    
    <div className="navbar">  
      
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/addmovie">Add Movie</Link>
            </button>
            <button>
              <Link to="/adddirector">Add Director</Link>
            </button>
          

    </div>
)
}

export default NavBar;