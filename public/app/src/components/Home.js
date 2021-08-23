import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import './style.css';


function Home() {
  // const [isOpen, setOpen] = useState(false)
  const Button = ({ onClick }) => {
    return (
      <button onClick={onClick}>
        <Hamburger distance="md" color="lightyellow" >
        </Hamburger>
      </button>
    );
  };

  return (
    <div>
      <div class="header">
        <h1>TAMAGACHA</h1>
        <div class='menu'>
          <Hamburger distance="md" color="lightyellow" />
        </div>
      </div>
    </div>
  );
}

export default Home;