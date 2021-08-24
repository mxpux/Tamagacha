import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Login</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Characters</a>
        </div>
        <div style={linkStyle}>
          <a href="#">My Tama</a>
        </div>
      </section>
    </nav>
  );
}
