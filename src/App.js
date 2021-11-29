import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

// importing components
import Navbar from './components/features/Navbar';
import Header from './components/features/Header';
import Main from './components/main-page/Main';
import Projects from './components/projects/Projects';
import Footer from './components/features/Footer';
import Social from './components/features/Social';

// resources used for Router, Switch operations below: 
// https://www.freecodecamp.org/news/react-router-cheatsheet/
// https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/
// https://v5.reactrouter.com/web/api/Switch
// https://stackoverflow.com/questions/56764690/what-is-the-difference-between-browserrouter-and-router-in-react-router


const App = () => {
  return (
    <Router>
      <div id="features">
        <Navbar />
        <Header />
      </div>
      <Routes>
        <Route component={Main} path='/' exact />
        <Route component={Projects} path='/projects' exact />
      </Routes>
      <div id="features">
        <Footer />
        <Social />
      </div>
    </Router>
  );
}

export default App;