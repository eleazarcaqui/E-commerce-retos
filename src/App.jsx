import React from 'react';
import Clients from './components/Clients';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <SearchComponent />
      <Works />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
