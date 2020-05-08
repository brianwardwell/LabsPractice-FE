import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/homePage';
import SingleCarPage from './components/singleCarPage';
import ComparePage from './components/comparePage';

import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/results' component = {SingleCarPage} />
      <Route exact path = '/compare' component = {ComparePage} />
    </div>
  );
}

export default App;
