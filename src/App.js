import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div>
      <Router>
				<Dashboard />
			</Router>
    </div>
   
  )
}

export default App;
