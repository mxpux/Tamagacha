import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import DropDown from './MenuDrop';
import '../styles/style.css';


function Home(props) {


  return (
    <div>
      <div class="header">
        <div class='menu'>
          <DropDown handlePageChange={props.handlePageChange}/>
        </div>
        <h1 onClick={() => {
          props.handlePageChange('HomePage')
        }}>TAMAGACHA</h1>
      </div>
    </div>
  );
}

export default Home;