import React from "react";
import './NavComponent.css'

function NavComponent({children}){
    return(
        <nav className="nav-container">
            {children}
        </nav>
    );
}

export{NavComponent}