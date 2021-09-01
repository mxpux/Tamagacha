import React, {useState} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav';
import Homepage from './components/Homepage/Homepage';
import Characters from './components/Characters/Characters';
import Hamburger from 'hamburger-react';

import Ttt from './components/TTT/Ttt';
import Profile from './components/Profile/Profile';
import Gacha from './components/gacha_page/gacha'

// import Matching from './components/Matching';
import MinigamePage from './components/Minigame/Minigamepage';

import Matching from './components/Matching/Matching';

import Signup from './components/Signup/Signup';

import Ttt2 from './components/TTT2/Ttt2';



function App() {
  const [pageToRender, setPageToRender] = useState('Homepage')

  const handlePageChange = page => {
    setPageToRender(page)
  }

  const renderPage = () => {
    if(pageToRender === 'Homepage') {
      return <Homepage />
    } else if (pageToRender === 'Login') {
      // return <Login />
    } else if (pageToRender === 'Sign Up') {
      // return sign up sweetalert
    } else if (pageToRender === 'Characters') {
      return <Characters />
    } else if (pageToRender === 'My Tama'){
      console.log('dont have anything to render yet')
    } else {
      //something else ?
    }
  }


  return (
    <div>

      <Header handlePageChange={handlePageChange}/>
      {/* <Homepage />
      {renderPage()} */}

      <MinigamePage />
      {/* <Ttt /> */}
      {/* <Matching /> */}

      {/* <Characters /> */}
      <Ttt2 />
      {/* <Ttt /> */}
    </div>
  );
}

export default App;
