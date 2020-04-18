import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage.js'

function App() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage
          ScrollToTop={ScrollToTop} />
      </Route>
    </div>
  );
}

export default App;
