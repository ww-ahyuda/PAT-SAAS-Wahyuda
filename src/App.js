import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Gallery />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
