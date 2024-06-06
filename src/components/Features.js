import React from 'react';
import './Features.css';

function Features() {
    return (
        <section className="features">
            <div className="features-content">
                <div className="features-grid">
                    <div className="feature-item">
                        <img src="image2.jpg" alt="Feature 1" className="feature-img" />
                        <div className="feature-text">
                            <h3>Feature 1</h3>
                            <p>Feature description.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="image2.jpg" alt="Feature 2" className="feature-img" />
                        <div className="feature-text">
                            <h3>Feature 2</h3>
                            <p>Feature description.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="image2.jpg" alt="Feature 3" className="feature-img" />
                        <div className="feature-text">
                            <h3>Feature 3</h3>
                            <p>Feature description.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src="image2.jpg" alt="Feature 4" className="feature-img" />
                        <div className="feature-text">
                            <h3>Feature 4</h3>
                            <p>Feature description.</p>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <img src="logo.jpg" alt="Main Section" className="main-image" />
                </div>
            </div>
            <div className="contact-form-section">
                <div className="profile-navigation">
                    <button className="nav-button">{'<'}</button>
                    <img src="hero.jpg" alt="Profile" className="profile-image" />
                    <button className="nav-button">{'>'}</button>
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
