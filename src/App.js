import React from 'react'
import './App.css';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Home from './pages';
import Sign from './component/Signup';
import Navbar from './component/Navbar';
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route path = '/sign-in'>
            <Sign/>
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
