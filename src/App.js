import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';


function App() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const [overlay, setOverlay] = useState(false);
  const [overlayPage, setOverlayPage] = useState(0);

  const showOverlay = (e) => {
    setOverlayPage(e.target.id);
    setOverlay(true);
  }

  const hideOverlay = () => {
    setOverlay(false);
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage
          ScrollToTop={ScrollToTop}
          overlay={overlay}
          overlayPage={overlayPage}
          showOverlay={showOverlay}
          hideOverlay={hideOverlay}
        />
      </Route>
    </div>
  );
}

export default App;
