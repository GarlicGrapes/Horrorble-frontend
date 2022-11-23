import React from "react";
import {Link} from "react-router-dom";

function NavBar() {

return(
    
    <div className="navbar">  
      
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/addmovie">Add Movie 🎥</Link>
            </button>
            <button>
              <Link to="/adddirector">Add Director 🎬</Link>
            </button>
            <button>
              <Link to="/addmonster">Add Monster 👹</Link>
            </button>
          

    </div>
)
}

export default NavBar;