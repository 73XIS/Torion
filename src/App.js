import React from 'react';

import { AboutUs, Footer, Gallery, Header, Intro, Work} from './container';
import { Navbar } from './components';
import './App.css';
import Producer from './container/Producer/Producer';
import Services from './container/Services/Services';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Producer />
    <Intro />
    <Gallery />
    <Work />
    <Footer />
  </div>
);

export default App;
