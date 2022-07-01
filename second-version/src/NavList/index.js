import React from "react";
import './NavList.css'

function NavList({children}){
    return(
        <ul className="nav-container__list">
            {children}
        </ul>
    )
}

export {NavList}