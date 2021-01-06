import React from 'react';
import Navigation from './Navigation';
import Body from './Body';
import Linkform from './Linkform';
import Information from './Information';
import Tab from './Tab';
import Footer from './Footer';
import 'tachyons';

function App() {
  return (
    <div className = "App">
      <Navigation/>
      <Body/>
      <Linkform/>
      <Information/>
      <Tab/>
      <Footer/>
      {/* Features

      Link Shortening
      Branded Links
      Analytics

      Resources

      Blog
      Developers
      Support

      Company

      About
      Our Team
      Careers
      Contact */}
    </div>
  )}

export default App;
