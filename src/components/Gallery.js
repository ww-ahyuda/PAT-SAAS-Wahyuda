import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-item">
        <img src="Asrama.jpg" alt="Gallery Item" />
        <p className="image-text"></p>
      </div>
      
      <div className="gallery-item">
        <img src="Masjid.jpg" alt="Gallery Item" />
        <p className="image-text"></p>
      </div>
      <div className="gallery-item">
        <img src="Lapangan.jpg" alt="Gallery Item" />
        <p className="image-text"></p>
      </div>
    </section>
  );
}

export default Gallery;
