import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import DropDown from './MenuDrop';
import '../styles/style.css';


function Home() {
  // const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div class="header">
        <div class='menu'>
          <DropDown />
        </div>
        <h1>TAMAGACHA</h1>
      </div>
    </div>
  );
}

export default Home;