//! IMPORT REACT
import React, {useState} from 'react';
//* BASE COMPONENTS
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

//*TAMA RELATED COMPONENTS
import Profile from './components/Profile/Profile';
import Tamadex from './components/Tamadex/Tamadex';
import Gacha from './components/gacha_page/gacha'
import MyTama from './components/MyTama/MyTama';

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
      return <MyTama handlePageChange={handlePageChange}/>
    } else if (pageToRender === 'Profile'){
      return checkIfUserHaveTama()
    } else if (pageToRender === 'Gacha'){
      return <Gacha handlePageChange={handlePageChange}/>
    }
  }

  //Check to see if User hava a Tama before render the <Profile /> components
  const checkIfUserHaveTama = () => {
    if(getCurrentTama()) {
      return <Profile />
    } else {
      return <MyTama handlePageChange={handlePageChange}/>
    }
  }

  return (
    <div>
      <Header handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

export default App;
