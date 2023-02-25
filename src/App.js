import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
    
      {/* write <Header /> and space Ctrl+Spacebar and click on auto-complete or manually click on Header to connect App.js with Header.jss file */}
      <Header />
      {/* Header */}
      <Nav setSelectedOption={setSelectedOption}/>
      {/* Navigation bar */}
      <Results selectedOption={selectedOption}/>
      {/* Movie Results section */}

    </div>
  );
}

export default App;