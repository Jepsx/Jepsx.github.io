import React from 'react'
import './ArticleSkills.css'
import { ArticleSkill} from '../ArticleSkill'

function ArticleSkills({name,skills,className}){
    return(
        <React.Fragment>
            <article className={className}>
                <h3>{name}</h3>
                <div>
                {skills.map(skill=>(
                    <ArticleSkill
                        key={skill.skillName}
                        name={skill.skillName}
                    />
                ))}
                </div>
            </article>

        </React.Fragment>
    )
}

export {ArticleSkills}