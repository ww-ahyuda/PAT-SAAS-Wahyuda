import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery">
            <div className="gallery-item">
                <img src="image2.jpg" alt="Gallery Item" />
                <p className="image-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="gallery-item">
                <img src="image2.jpg" alt="Gallery Item" />
                <p className="image-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="gallery-item">
                <img src="image2.jpg" alt="Gallery Item" />
                <p className="image-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </section>
    );
}

export default Gallery;
