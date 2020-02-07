import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './Components/CustomCss/pfdb.css'

import SpellDisplay from './Components/SpellDisplay'
import SplashScreen from './Components/SplashScreen'

const App = () => {
  return (
    <BrowserRouter>
      <div className="pfdb_main">
        <Route exact path="/"     component={SplashScreen} />
        <Route       path="/spells"     component={SpellDisplay} />
      </div>
    </BrowserRouter>
  );
}

export default App;
