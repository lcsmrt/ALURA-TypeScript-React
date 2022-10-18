import React from 'react';
import style from './Button.module.scss';

interface IProp {
  children?: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

export default function Button({children, type, onClick}: IProp) {
  return(
    <button 
      onClick={onClick} 
      type={type}
      className={style.button}>
      {children}
    </button>)
}

{/*teste*/}