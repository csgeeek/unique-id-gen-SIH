import React from 'react'
import Title from './Title'
import Navlink from './Navlink'

const Header = () => {
  return (
    <div className='header'>
        <div className="title">{<Title img='/images/logo.jpeg' text="TITLE"/>}</div>
        <div className="navbar">
            <Navlink link="#" text="Home"/>
            <Navlink link="#" text="Services"/>
            <Navlink link="#" text="About"/>
            <Navlink link="#" text="More"/>
        </div>
    </div>
  )
}

export default Header