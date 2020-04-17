import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage.js'
import Test from './pages/test.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Mainpage />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </div>
  );
}

export default App;
