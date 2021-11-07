import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// importing components
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Social from './components/Social';

function App() {
  return (
    <div className="bucket-app">
      <BucketList />
    </div>
  );
}

export default App;
