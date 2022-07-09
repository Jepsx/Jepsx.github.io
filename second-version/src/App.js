import './App.css';
import React from 'react';
import { NavComponent} from './components/NavComponent'
import { NavList } from './components/NavList';
import { NavListItem } from './components/NavListItem';
import { IntroItem } from './components/IntroItem';
import { ArticleSkills } from './components/ArticleSkills';
import { ProjectItem } from './components/ProjectItem';
import Mobile from './images/ProjectMobileFirts.PNG'
import Movies from './images/movies.jpg'
import Intelli from './images/intelli_BM.png'
import Animation from './images/Animationland.PNG'
import Todo from './images/my_to_do.jpg'

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

const projects=[
  {
    name:'Mobile First Platzi Project',
    urlImg:Mobile,
    text:'Projecto final del curso de Mobile First de plazi.',
    href:'https://jepsx.github.io/MobileFirstProjecPlatzi/'
  },
  {
    name:'Movies (UI WIP)',
    urlImg:Movies,
    text:'Projecto Final del Curso Practico Consumo de API REST Platzi.',
    href:'https://jepsx.github.io/Movies/'
  },
  {
    name:'Intelli-BM',
    urlImg:Intelli,
    text:'Projecto de Certificación MisionTIC 2022 Stack(MEAN).',
    href:'https://github.com/KelvinJ1/Intelli-BM'
  },
  {
    name:'Animationland',
    urlImg: Animation,
    text:'Projecto Final del Curso de Animaciones con CSS Platzi.',
    href:'https://jepsx.github.io/PlatziAnimationland/'
  },
  {
    name:'My to-do',
    urlImg:Todo,
    text:'Projecto Final del Curso de Introducción a React.js Platzi.',
    href:'https://jepsx.github.io/learningReact/'
  },
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
      <section className="projects">
        <div className="projects__title">
            <h2>Proyectos</h2>
        </div>
        <div className="projects__projects-container">
            {projects.map(project => (
              <ProjectItem
                key={project.name}
                name={project.name}
                urlImg={project.urlImg}
                href={project.href}
                text={project.text}
              />
            ))}
        </div>
      </section>
      <section className="contact" id="contact">
        <h2>Contacto</h2>
        <h3>Correo:</h3>
        <span>julianchos1998@gmail.com</span>
        <h3>Celular:</h3>
        <span>(+57) 350 249 1680</span>
        <h3>Dirección:</h3>
        <span>Calle 31 N° 1&#867 - 62 Chia</span>
        <div className="contact__triangle"></div>
      </section>
      <footer>
        <picture><img src="" alt=""/></picture>
        <div>
            <a className="footer__ico" href="https://github.com/Jepsx" target="_blank" rel='noreferrer'><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path className="cls-1" d="M15,3a12,12,0,0,0-2.9,23.6c-.1-.1-.1-.3-.1-.6V24H10.5a2.15,2.15,0,0,1-1.9-1c-.4-.7-.5-1.8-1.4-2.5-.3-.3-.1-.5.2-.5A3.57,3.57,0,0,1,9,21.2a1.62,1.62,0,0,0,1.6.8,10.9,10.9,0,0,0,1.7-.1,4,4,0,0,1,1.6-2c-4-.4-5.9-2.4-5.9-5.1a4.82,4.82,0,0,1,1.3-3.2c-.2-1-.6-2.9.1-3.6a4,4,0,0,1,3.1,1.5,10.47,10.47,0,0,1,3-.5,9.29,9.29,0,0,1,2.9.5A4.47,4.47,0,0,1,21.6,8c.7.7.4,2.7.1,3.6A5,5,0,0,1,23,14.8c0,2.7-1.9,4.7-5.9,5.1A4.27,4.27,0,0,1,19,23.3v3A11.91,11.91,0,0,0,27,15,12,12,0,0,0,15,3Z"/></svg></a>
            <a className="footer__ico" href="https://www.linkedin.com/in/jepsx" target="_blank" rel='noreferrer'><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path className="cls-1" d="M24.3,3H5.7A2.69,2.69,0,0,0,3,5.7V24.4A2.67,2.67,0,0,0,5.7,27H24.4a2.69,2.69,0,0,0,2.7-2.7V5.7A2.84,2.84,0,0,0,24.3,3ZM9.3,21.7h0A1.75,1.75,0,0,1,7.6,20V14a1.75,1.75,0,0,1,1.7-1.7h0A1.75,1.75,0,0,1,11,14v6A1.75,1.75,0,0,1,9.3,21.7Zm0-11.1A1.61,1.61,0,0,1,7.6,9,1.64,1.64,0,0,1,9.4,7.4,1.61,1.61,0,0,1,11.1,9,1.64,1.64,0,0,1,9.3,10.6ZM21.4,21.7h0a1.58,1.58,0,0,1-1.6-1.6V16.6c0-1.4-.9-1.6-1.2-1.6s-1.4,0-1.4,1.6V20a1.58,1.58,0,0,1-1.6,1.6h-.1A1.58,1.58,0,0,1,13.9,20V14a1.75,1.75,0,0,1,1.7-1.7h0A1.75,1.75,0,0,1,17.3,14s.4-1.7,2.9-1.7c1.6,0,2.9,1.3,2.9,4.2V20A1.83,1.83,0,0,1,21.4,21.7Z"/></svg></a>
          </div>
      </footer>
    </React.Fragment>
  );
}



export default App;
