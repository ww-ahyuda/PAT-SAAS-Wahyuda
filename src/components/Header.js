import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="text-content">
        <h1>SMK TI BAZMA</h1>
        <p>Merajut Asa, Menjejak & Menebar Manfaat</p>
        <button>Button</button>
      </div>
      <div className="video-content">
        <div className="video-placeholder">
          <img src="hero.jpg" alt="Video Thumbnail" />
        </div>
      </div>
    </header>
  );
}

export default Header;
