import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Characters from './components/Characters';
import Hamburger from 'hamburger-react';
import './styles/style.css';
import Login from './components/login';
import DropDown from './components/MenuDrop';
import Ttt from './components/Ttt';
import Profile from './components/Profile'


import Matching from './components/Matching';

function App() {
  return (
    <div>
      <Home />
      <Homepage />
      <Matching />
    </div>
  );
}

export default App;
