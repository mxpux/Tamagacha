import React, { useState } from "react";
// import Hamburger from 'hamburger-react';
import MenuDrop from './MenuDrop';
import './header.css';


function Header(props) {


  return (
    <div>
      <div className="header">
        <div className='menu'>
          <MenuDrop handlePageChange={props.handlePageChange}/>
        </div>
        <h1 className='header-h1' onClick={() => {
          props.handlePageChange('HomePage')
        }}>TAMAGACHA</h1>
      </div>
    </div>
  );
}

export default Header;