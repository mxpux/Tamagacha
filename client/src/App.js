import React, {useState} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav';
import Homepage from './components/Homepage/Homepage';
import MyTama from './components/MyTama/MyTama';
import Hamburger from 'hamburger-react';

import Ttt from './components/TTT/Ttt';
import Profile from './components/Profile/Profile';
import Gacha from './components/gacha_page/gacha'

import MinigamePage from './components/Minigame/Minigamepage';

import Matching from './components/Matching/Matching';

import Signup from './components/Signup/Signup';
import Tamadex from './components/Tamadex/Tamadex';

import Ttt2 from './components/TTT2/Ttt2';
import SelectTama from './components/SelectTama/SelectTama';

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
      return <Tamadex />
    } else if (pageToRender === 'My Tama'){
      return <MyTama />
    } else {
      //something else ?
    }
  }


  return (
    <div>

      <Header handlePageChange={handlePageChange}/>
      {/* <Homepage /> */}
      {renderPage()}

      <MinigamePage /> */}
      {/* <Ttt /> */}
      {/* <Matching /> */}
      {/* <Tamadex /> */}
      {/* <Characters /> */}
      <Ttt2 />
      {/* {/* <Ttt /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
