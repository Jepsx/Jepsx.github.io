import React from 'react'
import './ProjectItem.css'


function ProjectItem({name,urlImg,href,text}) {
  return (
    <article className="projects__projects-container__item">
                <picture>
                    <img src={urlImg} alt=""/>
                </picture>
                <h3>{name}</h3>
                <p>{text}</p>
                <a href={href} target="_blank" rel='noreferrer'>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 27.7 32" >
                        <path className="st0" d="M0,0v9.2L11.7,16L0,22.8V32l27.7-16L0,0z"/></svg>
                </a>
            </article>
  )
}



export {ProjectItem}
