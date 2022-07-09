import './App.css';
import React from 'react';
import { NavComponent} from './components/NavComponent'
import { NavList } from './components/NavList';
import { NavListItem } from './components/NavListItem';
import { IntroItem } from './components/IntroItem';
import { ArticleSkills } from './components/ArticleSkills';

const listItems=[
          {name:'GitHub',icon:true,url:'https://github.com/Jepsx'},
          {name:'Linkedin',icon:true,url:'https://www.linkedin.com/in/jepsx'},
          {name:'Contacto',icon:false,url:'#contact'}
        ]

const skills = [
          {
            name:'Frontend',
            listSkills:[
              {
                skillName:'Html'
              },
              {
                skillName:'Css'
              },
              {
                skillName:'Angular'
              },
              {
                skillName:'JavaScript'
              },
              {
                skillName:'React.js'
              },
            ]
          },
          {
            name:'Backend',
            listSkills:[
              {
                skillName:'Node.js'
              },
            ]
          }
]

function App() {

  const [openMenu,setOpenMenu] = React.useState(false);


  return (
    <React.Fragment>
      <header>
        <NavComponent>
          <span className='nav-container__ico' onClick={()=>{setOpenMenu(!openMenu)}}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 30 30" className={!!openMenu ?'active':undefined}><path className="st0" d="M27,12.6H3c-1.7,0-3-1.3-3-3v0c0-1.7,1.3-3,3-3h24c1.7,0,3,1.3,3,3v0C30,11.3,28.7,12.6,27,12.6z M30,20.4L30,20.4c0-1.7-1.3-3-3-3H3c-1.7,0-3,1.3-3,3v0c0,1.7,1.3,3,3,3h24C28.7,23.4,30,22,30,20.4z"/>
                </svg>
          </span>
          <NavList>
            {
              listItems.map((item)=><NavListItem key={item.name} name={item.name} icon={item.icon} url={item.url} open={openMenu}/>)
            }
          </NavList>
        </NavComponent>
      </header>
      <section className='intro'>
            <IntroItem className={'intro__item text'}>

            </IntroItem>
            <IntroItem className={'intro__item photo'}>

            </IntroItem>
      </section>
      <section className="about-me">
        <div className="about-me__circle">
              <div className="about-me__circle_circle">
                  <div className="about-me__circle_circle_circle"></div>
              </div>
          </div>
          <h2 className="about-me__title">Sobre mi</h2>
          <p className="about-me__p">Soy un apasionado por el desarrollo de software, siempre con ganas de ser parte y conocer las nuevas tecnologias que surgen en este dinamico ecosistema.</p>        
      </section>
      <section className="skills">
        <div className="skills__title">
          <h2>Habilidades</h2>
        </div>
        <section className="skills__container">
            <ArticleSkills 
              className={'skills__container_rol'} 
              name={skills[0].name}
              skills={skills[0].listSkills}
            />
            <ArticleSkills 
              className={'skills__container_rol'} 
              name={skills[1].name}
              skills={skills[1].listSkills}
            />
        </section>
      </section>
      <section></section>
      <section></section>
      <footer></footer>
    </React.Fragment>
  );
}



export default App;
