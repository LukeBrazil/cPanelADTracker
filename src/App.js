import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Candidates from './components/Candidates';


// add small change
function App() {
  return (
    <div>
      {/* <Router>
				<LandingPage />
			</Router>
      <Router path='/candidates'>
				<Candidates />  
			</Router> */}
      <Router path='/dashboard'>
				<Dashboard />
			</Router>

    </div>
   
  )
}

export default App;
