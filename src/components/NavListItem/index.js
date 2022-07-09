import React from "react";
import './NavListItem.css'

function NavListItem(props){
    return(
         <li className={`nav-container__list_listItem ${props.name} ${props.open?'active':undefined}`}>
            <a href={props.url} target={props.name !== 'Contacto' ? '_blank':undefined} rel={props.name !== 'Contacto' ? 'noreferrer':undefined} className={props.name}>
                {props.name}
                {props.icon === true && props.name === 'GitHub' && <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path className="cls-1" d="M15,3a12,12,0,0,0-2.9,23.6c-.1-.1-.1-.3-.1-.6V24H10.5a2.15,2.15,0,0,1-1.9-1c-.4-.7-.5-1.8-1.4-2.5-.3-.3-.1-.5.2-.5A3.57,3.57,0,0,1,9,21.2a1.62,1.62,0,0,0,1.6.8,10.9,10.9,0,0,0,1.7-.1,4,4,0,0,1,1.6-2c-4-.4-5.9-2.4-5.9-5.1a4.82,4.82,0,0,1,1.3-3.2c-.2-1-.6-2.9.1-3.6a4,4,0,0,1,3.1,1.5,10.47,10.47,0,0,1,3-.5,9.29,9.29,0,0,1,2.9.5A4.47,4.47,0,0,1,21.6,8c.7.7.4,2.7.1,3.6A5,5,0,0,1,23,14.8c0,2.7-1.9,4.7-5.9,5.1A4.27,4.27,0,0,1,19,23.3v3A11.91,11.91,0,0,0,27,15,12,12,0,0,0,15,3Z"/></svg>}
                {props.icon === true && props.name === 'Linkedin' && <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path className="cls-1" d="M24.3,3H5.7A2.69,2.69,0,0,0,3,5.7V24.4A2.67,2.67,0,0,0,5.7,27H24.4a2.69,2.69,0,0,0,2.7-2.7V5.7A2.84,2.84,0,0,0,24.3,3ZM9.3,21.7h0A1.75,1.75,0,0,1,7.6,20V14a1.75,1.75,0,0,1,1.7-1.7h0A1.75,1.75,0,0,1,11,14v6A1.75,1.75,0,0,1,9.3,21.7Zm0-11.1A1.61,1.61,0,0,1,7.6,9,1.64,1.64,0,0,1,9.4,7.4,1.61,1.61,0,0,1,11.1,9,1.64,1.64,0,0,1,9.3,10.6ZM21.4,21.7h0a1.58,1.58,0,0,1-1.6-1.6V16.6c0-1.4-.9-1.6-1.2-1.6s-1.4,0-1.4,1.6V20a1.58,1.58,0,0,1-1.6,1.6h-.1A1.58,1.58,0,0,1,13.9,20V14a1.75,1.75,0,0,1,1.7-1.7h0A1.75,1.75,0,0,1,17.3,14s.4-1.7,2.9-1.7c1.6,0,2.9,1.3,2.9,4.2V20A1.83,1.83,0,0,1,21.4,21.7Z"/></svg>}

            </a>
        </li>

    )
}


export {NavListItem}