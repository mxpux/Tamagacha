import React, {useState} from 'react';
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

import MinigamePage from './components/Minigamepage';

import Matching from './components/Matching';

function App() {
  const [pageToRender, setPageToRender] = useState('Homepage')

  const handlePageChange = page => {
    setPageToRender(page)
  }

  const renderPage = () => {
    if(pageToRender === 'Homepage') {
      return <Homepage />
    } else if (pageToRender === 'Login') {
      return <Login />
    } else if (pageToRender === 'Characters') {
      return <Characters />
    } else if (pageToRender === 'My Tama'){
      console.log('dont have anything to render yet')
    } else {
      //something else ??
    }
  }

  return (
    <div>
      <Home handlePageChange={handlePageChange}/>
      <Homepage />
      {renderPage()}

      <Matching />

      <MinigamePage />
    </div>
  );
}

export default App;
