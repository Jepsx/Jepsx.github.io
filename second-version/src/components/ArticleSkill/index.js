import React from 'react'
import './ArticleSkill.css'

function ArticleSkill({name}) {
  return (
    <article className="logo-container">
        {name==='Html' && (<i className={name} alt={name}/>) }
        {name==='Css' && (<i className={name} alt={name}/>)}
        {name==='Angular' && (<i className={name} alt={name}/>)}
        {name==='JavaScript' && (<i className={name} alt={name}/>)}
        {name==='React.js' && (<i className={'Reactjs'} alt={name}/>)}
        {name==='Node.js' && (<i className={'Nodejs'} alt={name}/>)}
        <span>{name}</span>
    </article>
  )
}

export {ArticleSkill}