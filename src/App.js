import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import Mainpage from './pages/Mainpage.js'
import Mainpage2 from './pages/Mainpage2'

function App() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage2
          ScrollToTop={ScrollToTop} />
        {/* <Mainpage
          ScrollToTop={ScrollToTop} /> */}
      </Route>
    </div>
  );
}

export default App;
