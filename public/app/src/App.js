import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Hamburger from 'hamburger-react';
import './components/style.css';
import Login from './components/login';
import DropDown from './components/MenuDrop';

function App() {
  return (
    <div>
      <Home />
      <Homepage />
    </div>
  );
}

export default App;
