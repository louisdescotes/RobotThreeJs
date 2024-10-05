import React from 'react';
import Landing from './pages/Landing';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Action from './pages/Action';
import Footer from './pages/Footer';

export default function Interface() {
  return (
    <div className="w-full h-full">
      <Landing />
      <div className=" h-screen bg-black" />
      <Page2 />
      <Page3 />
      <Page4 />
      <Action />
      <Footer />
    </div>
  );
}
