import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import MenuDrop from './MenuDrop';
import './header.css';


function Header(props) {


  return (
    <div>
      <div class="header">
        <div class='menu'>
          <MenuDrop handlePageChange={props.handlePageChange}/>
        </div>
        <h1 onClick={() => {
          props.handlePageChange('HomePage')
        }}>TAMAGACHA</h1>
      </div>
    </div>
  );
}

export default Header;