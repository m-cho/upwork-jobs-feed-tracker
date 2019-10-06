import React, {
  createRef,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { sGetAuth } from '../../store/reducers/auth';
import { sGetUnseenJobs } from '../../store/reducers/jobs';

import NewJobsText from './NewJobsText';
import NoNewJobsText from './NoNewJobsText';
import UnauthenticatedText from './UnauthenticatedText';
import styles from './Popup.style';

const defaultWidth = 320;
const safeWidth = 21; // includes spacing, etc.

const Popup = ({
  classes,
  isAuthenticated,
  unseenJobs
}) => {
  const [containerWidth, setContainerWidth] = useState(defaultWidth);

  const textRef = createRef();
  const logoRef = createRef();

  useEffect(() => {
    setContainerWidth(
      textRef.current.offsetWidth +
      logoRef.current.offsetWidth +
      safeWidth
    );
  }, [
    isAuthenticated,
    unseenJobs
  ]);

  return (
    <div
      style={{ width: containerWidth }}
      className={classes.container}
    >
      <Grid
        container
        spacing={1}
      >
        <Grid
          ref={logoRef}
          className={classes.logoContainer}
          item
        >
          <img
            className={classes.logoImage}
            src="/icon.png"
            alt="upwork-logo"
          />
        </Grid>
        <Grid
          ref={textRef}
          className={classes.textContainer}
          item
        >
          <Typography
            className={classes.typography}
            color="textSecondary"
            fontWeight={700}
          >
            {
              isAuthenticated &&
              unseenJobs.length > 0 &&
              <NewJobsText jobs={unseenJobs} />
            }
            {
              isAuthenticated &&
              unseenJobs.length === 0 &&
              <NoNewJobsText />
            }
            {
              !isAuthenticated &&
              <UnauthenticatedText />
            }
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Popup.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  unseenJobs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: sGetAuth(state),
  unseenJobs: sGetUnseenJobs(state)
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Popup));
