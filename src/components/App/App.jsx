import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Popup from '../../views/Popup/Popup';
import Options from '../../views/Options/Options';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/popup">
        <Popup />
      </Route>
      <Route path="/options">
        <Options />
      </Route>
    </Switch>
  </Router>
);

export default App;
