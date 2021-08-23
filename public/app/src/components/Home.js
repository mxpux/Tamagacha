import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import './style.css';


function Home() {
  // const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div class="header">
        <h1>TAMAGACHA</h1>
        <div class='menu'>
          <Hamburger distance="md" color="lightyellow" onToggle={toggled => {
            if (toggled) {
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Characters</a>
                </li>
                <li>
                  <a href="#">My Tama</a>
                </li>
              </ul>

            } else {
              // close a menu
            }
          }} />
        </div>
      </div>
    </div>
  );
}

export default Home;