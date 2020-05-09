import React from 'react';
import './App.css';
import Login from './components/Login'
import APatient from './components/APatient'
import EPatient from './components/EPatient'
import Billing from './components/Billing'
import Home from './components/Home'
import SPatient from './components/SPatient'
import SDoctor from './components/SDoctor'

function App() {
  return (
    <div className="App">
      <SDoctor />
    </div>
  );
}

export default App;
