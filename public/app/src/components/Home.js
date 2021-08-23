import React from 'react';
import './style.css';

function Home() {
  return (
    <div class="header" style={{
      display: 'flex',
      fontFamily: 'helvetica',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>TAMAGACHA</h1>
    </div>
  );
}

export default Home;
