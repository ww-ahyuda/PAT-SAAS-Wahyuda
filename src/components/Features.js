import React from 'react';
import './Features.css';

function Features() {
    return (
        <section className="features">
             <div className="gallery-item">
                <img src="Fasilitas.jpg" alt="Gallery Item" />
                <p className="image-text"></p>
            </div>
            <div className="features-content">
                <div className="features-grid">
                    
                    <div className="feature-item">
                        <img src="Lapangan.jpg" alt="Feature 1" className="feature-img" />
                        <div className="feature-text">
                            <h3>Lapangan</h3>
                            
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="Kelas.jpg" alt="Feature 2" className="feature-img" />
                        <div className="feature-text">
                            <h3>Kelas</h3>
                            
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="Masjid.jpg" alt="Feature 3" className="feature-img" />
                        <div className="feature-text">
                            <h3>Masjid</h3>
                           
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="Asrama.jpg" alt="Feature 4" className="feature-img" />
                        <div className="feature-text">
                            <h3>Asrama</h3>
                            
                        </div>
                    </div>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Button</button>
                </form>
                
            </div>
           
            <div className="pagination">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <footer>
                <p>Copyright 2024 - NamaLembaga</p>
            </footer>
        </section>
    );
}

export default Features;
