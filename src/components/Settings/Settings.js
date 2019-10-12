import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core';

import { sGetSettings } from '../../store/reducers/settings';
import { acSettingsUpdate } from '../../store/actions/settings';

import SettingsItem from './SettingsItem';
import styles from './Settings.style';

const fetchingIntervalOptions = [1, 5, 10, 20, 30]; // minutes

export const Settings = ({
  classes,
  settings,
  updateSettings
}) => {
  const {
    darkMode,
    soundEnabled,
    fetchingEnabled,
    fetchingInterval
  } = settings;

  return (
    <Card className={classes.card}>
      <List>
        <ListItem>
          <h2 className={classes.title}>
            Settings
          </h2>
        </ListItem>
        <SettingsItem label={"Enable fetching"}>
          <Switch
            color="primary"
            size="small"
            checked={fetchingEnabled}
            onChange={() =>
              updateSettings('fetchingEnabled', !fetchingEnabled)
            }
          />
        </SettingsItem>
        <Divider
          light
          className={classes.divider}
        />
        {fetchingEnabled && (
          <SettingsItem label="Fetching interval">
            <Select
              displayEmpty
              disableUnderline
              value={fetchingInterval}
              className={classes.select}
              inputProps={{
                className: classes.selectInput
              }}
              onChange={e =>
                updateSettings('fetchingInterval', e.target.value)
              }
            >
              {fetchingIntervalOptions.map(interval =>
                <MenuItem
                  value={interval}
                  key={`settings-interval-${interval}`}
                >
                  {interval}&nbsp;
                  minute
                  {interval > 1 ? 's' : ''}
                </MenuItem>
              )}
            </Select>
          </SettingsItem>
        )}
        {fetchingEnabled && (
          <SettingsItem label="Play notification sound">
            <Switch
              size="small"
              color="primary"
              checked={soundEnabled}
              onChange={() =>
                updateSettings('soundEnabled', !soundEnabled)
              }
            />
          </SettingsItem>
        )}
        {fetchingEnabled && (
          <Divider
            light={true}
            className={classes.divider}
          />
        )}
        <SettingsItem label="Dark mode">
          <Switch
            size="small"
            color="primary"
            checked={darkMode}
            onChange={() =>
              updateSettings('darkMode', !darkMode)
            }
          />
        </SettingsItem>
      </List>
    </Card>
  )
};

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  updateSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  settings: sGetSettings(state)
});

const mapDispatchToProps = dispatch => ({
  updateSettings: (label, value) =>
    dispatch(acSettingsUpdate({
      [label]: value
    }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Settings));
