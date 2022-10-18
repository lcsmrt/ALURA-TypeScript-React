import React from 'react';
import style from './Navbar.module.scss';
import logoPlaceholder from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className={style.navBar}>
        <div className={style.navContainer}>
          <a className={style.logo} rel="home" href="#">
            <img className={style.logoImage} src={logoPlaceholder} alt="" />
          </a>
          <span className={style.blankspace}></span>
          {/*<ul>
            <li className={style.navLink} href="#"></li>
          </ul>*/}
        </div>
      </nav>
    </>
  )
}

export default Navbar;

{/*
<Button text='Usuários'/>
<Button text='Hardware'/>
*/}