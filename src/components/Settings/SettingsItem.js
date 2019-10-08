import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

const SettingsItem = ({ label, children, labelStyle }) => (
  <ListItem>
    <Grid
      container
      direction="row"
      justify="space-between"
    >
      <Grid item>
        <Box
          fontSize={15}
          fontWeight={500}
          style={labelStyle}
        >
          {label}
        </Box>
      </Grid>
      <Grid item>
        {children}
      </Grid>
    </Grid>
  </ListItem>
);

SettingsItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default SettingsItem;
