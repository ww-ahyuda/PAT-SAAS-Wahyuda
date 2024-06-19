import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="gallery-item">
                <img src="" alt="Gallery Item" />
            </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Profil Sekolah</a></li>
        <li><a href="#">Kemitraan</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

