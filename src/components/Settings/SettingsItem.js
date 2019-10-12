import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

const SettingsItem = ({ label, children, labelStyle }) => (
  <ListItem>
    <Grid
      container
      direction="row"
      justify="space-between"
    >
      <Grid item>
        <Typography color="textSecondary">
          <Box
            fontSize={15}
            component="span"
            fontWeight={500}
            style={labelStyle}
          >
              {label}
          </Box>
        </Typography>
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
