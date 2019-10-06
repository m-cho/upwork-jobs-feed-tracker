import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Popup from '../../views/Popup/Popup';
import Options from '../../views/Options/Options';
import { theme as baseTheme } from '../../theme';
import { sGetDarkMode } from '../../store/reducers/settings';

const theme = darkMode => ({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: darkMode
      ? 'dark'
      : 'light'
  }
});

const App = ({ darkMode }) => (
  <MuiThemeProvider theme={createMuiTheme(theme(darkMode))}>
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

App.propTypes = { darkMode: PropTypes.bool.isRequired };

const mapStateToProps = state => ({ darkMode: sGetDarkMode(state) });

export default connect(mapStateToProps, {})(App);
