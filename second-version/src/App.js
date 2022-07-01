import './App.css';
import React, { useRef } from 'react';
import { NavComponent} from './NavComponent'
import { NavList } from './NavList';
import { NavListItem } from './NavListItem';

const listItems=[
          {name:'GitHub',icon:true,url:'https://github.com/Jepsx'},
          {name:'Linkedin',icon:true,url:'https://www.linkedin.com/in/jepsx'},
          {name:'Contacto',icon:false,url:'#contact'}
        ]

function App() {

  const [openMenu,setOpenMenu] = React.useState(false);

  const toggleMenu = (initialValue)=>{
    // if(!openMenu){
    //   const button = useRef(initialValue);
    //   debugger
    // }
  }

  return (
    <React.Fragment>
      <header>
        <NavComponent>
          <span className='nav-container__ico' onClick={toggleMenu}></span>
          <NavList>
            {
              listItems.map((item)=><NavListItem key={item.name} name={item.name} icon={item.icon} url={item.url} />)
            }
          </NavList>
        </NavComponent>
      </header>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </React.Fragment>
  );
}



export default App;
