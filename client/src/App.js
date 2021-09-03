//! IMPORT REACT
import React, {useState} from 'react';
//* BASE COMPONENTS
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
// import Hamburger from 'hamburger-react';

//*TAMA RELATED COMPONENTS
import Profile from './components/Profile/Profile';
import Tamadex from './components/Tamadex/Tamadex';
import Gacha from './components/gacha_page/gacha'
import MyTama from './components/MyTama/MyTama';
import SelectTama from './components/SelectTama/SelectTama'; //! Duplicate of MyTama, import into mytama

//* MINIGAMES
import MinigamePage from './components/Minigame/Minigamepage';
import Matching from './components/Matching/Matching';
import Ttt2 from './components/TTT2/Ttt2';
import Ttt from './components/TTT/Ttt'; //! Duplicate of TTT2

//* LocalStorage
import { getCurrentTama } from './utils/localStorage'

function App() {
  const [pageToRender, setPageToRender] = useState('HomePage')

  const handlePageChange = page => {
    setPageToRender(page)
  }

  const renderPage = () => {
    if(pageToRender === 'HomePage') {
      return <Homepage />
    } else if (pageToRender === 'Login') {
      // return <Login />
    } else if (pageToRender === 'Sign Up') {
      // return sign up sweetalert
    } else if (pageToRender === 'Characters') {
      return <Tamadex />
    } else if (pageToRender === 'My Tama'){
      return <MyTama />
    } else if (pageToRender === 'Profile'){
      return checkIfUserHaveTama()
    } else {
      //anything else....
    }
  }

  //Check to see if User hava a Tama before render the <Profile /> components
  const checkIfUserHaveTama = () => {
    if(getCurrentTama()) {
      return <Profile />
    } else {
      return <MyTama />
    }
  }

  return (
    <div>
      {/*  tamadex ✔️, header ✔️, homepage ✔️, */}
      {/* TTT, Matching, myTama, Profile, minigamePage, Gacha, Navigatable pages */}
      <Header handlePageChange={handlePageChange}/>
      {/* <Homepage /> */}
      {renderPage()}
      {/* <Gacha /> */}
      {/* <MinigamePage /> */}
      {/* <MyTama /> */}
      {/* <Matching /> */}
      {/* <Tamadex /> */}
      {/* <Ttt2 /> */}
      {/* <Matching /> */}
      {/* <Tamadex /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
