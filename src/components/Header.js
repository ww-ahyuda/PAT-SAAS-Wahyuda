import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="text-content">
        <h1>Your Heading</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
