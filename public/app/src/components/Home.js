import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import DropDown from './MenuDrop';
import './style.css';


function Home() {
  // const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div class="header">
        <h1>TAMAGACHA</h1>
        <div class='menu'>
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default Home;