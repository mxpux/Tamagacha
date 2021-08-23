import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Hamburger from 'hamburger-react';
import './components/style.css';
import Login from './components/login'

function App() {
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
      <Nav />
      <Homepage />
    </div>
  );
}

export default App;
