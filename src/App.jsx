import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="app-container">
          <Menu />
          <div className="app-container__pages">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
