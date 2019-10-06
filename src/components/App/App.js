import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Popup from '../../views/Popup/Popup';
import Options from '../../views/Options/Options';
import { theme } from '../../theme';

const App = () => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline>
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
    </CssBaseline>
  </MuiThemeProvider>
);

export default App;
