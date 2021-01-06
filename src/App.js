import React from 'react';
import Navigation from './component/Navigation/Navigation';
import Body from './component/Body/Body';
import Linkform from './component/Linkform/Linkform';
import Information from './component/Information/Information';
import Tab from './component/Tab/Tab';
import Footer from './component/Footer/Footer';
import 'tachyons';

function App() {
  return (
    <div className = "App">
      <Navigation/>
      <Body/>
      <Information/>
      <Tab/>
      <Footer/>
      <Linkform/>
    </div>
  )}

export default App;
