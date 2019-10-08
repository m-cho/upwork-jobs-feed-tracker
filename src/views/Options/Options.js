import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import JobsList from '../../components/JobsList/JobsList';
import Settings from '../../components/Settings/Settings';
import styles from './Options.style';

const Options = ({classes}) => (
  <Container
    maxWidth="md"
    className={classes.rootContainer}
  >
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={4}
        style={{position: 'relative'}}
      >
        <Settings/>
      </Grid>
      <Grid
        item
        xs={8}
      >
        <Card className={classes.jobsContainer}>
          <h2>
            My Job Feed
          </h2>
          <JobsList />
        </Card>
      </Grid>
    </Grid>
  </Container>
);

Options.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(Options);
