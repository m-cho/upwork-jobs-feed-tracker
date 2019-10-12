import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import VerifiedIcon from '@material-ui/icons/CheckCircle';
import UnverifiedIcon from '@material-ui/icons/CheckCircleOutline';

import {
  getCountry,
  getJobType,
  clientFeedback,
  isPaymentVerified,
  totalSpentReadable
} from '../../utils/jobs';

import styles from './Job.style';

const maxDescriptionCharacters = 300;

const Job = ({ job, classes }) => {
  const [fullMode, setFullMode] = useState(false);

  return (
    <div className={classes.container}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.upwork.com/jobs/_${job.ciphertext}`}
      >
        <h2>{job.title}</h2>
      </a>
      <Typography
        component="p"
        color="textSecondary"
      >
        <Box
          component="span"
          fontWeight={500}
        >
          {getJobType(job)}&nbsp;
        </Box>
        - Intermediate ({job.tier})
        - Est. time: {job.durationLabel} - {job.engagement}<br />
        Posted {moment(job.createdOn).fromNow()}
      </Typography>
      <Typography
        component="p"
        color="textPrimary"
        className={classes.description}
      >
        {job.description.length <= maxDescriptionCharacters &&
          job
            .description
            .split('\n')
            .map((item, key) =>
              <span key={`job-description-${job.id}-${key}`}>
                {item}<br/>
              </span>
            )
        }
        {job.description.length > maxDescriptionCharacters && (
          <>
            {!fullMode && (
              <>
                {job.description.substr(0, maxDescriptionCharacters)}
                ...
                <Link
                  color="primary"
                  onClick={() => setFullMode(true)}
                >
                  &nbsp;more
                </Link>
              </>
            )}
            {fullMode &&
              job
                .description
                .split('\n')
                .map((item, key) =>
                  <span key={`job-description-${job.id}-${key}`}>
                    {item}<br/>
                  </span>
                )
            }
          </>
          )
        }
      </Typography>
      <div className={classes.skills}>
        {job.attrs &&
          job.attrs.length &&
          job.attrs.map(skill => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={`skill-${skill.uid}`}
              href={`https://www.upwork.com/ab/jobs/search/?ontology_skill_uid=${skill.uid}`}
            >
              <Chip className={classes.chip} label={skill.prettyName} />
            </a>
          ))
        }
      </div>
      <div className={classes.proposals}>
        Proposals: <strong>{job.proposalsTier}</strong>
      </div>
      <div className={classes.meta}>
        <div className={classes.iconContainer}>
          {isPaymentVerified(job)
            ? <VerifiedIcon className={classes.verifiedIcon} />
            : <UnverifiedIcon />
          }
        </div>
        <div className={classes.metaText}>
          <strong>
            &nbsp;Payment&nbsp;
            {!isPaymentVerified(job) ? 'un' : '' }verified
          </strong>
        </div>
        <div className={classes.rating}>
          <StarIcon className={clientFeedback(job) >= 1 ? classes.startIconActive : classes.starIcon } />
          <StarIcon className={clientFeedback(job) >= 2 ? classes.startIconActive : classes.starIcon } />
          <StarIcon className={clientFeedback(job) >= 3 ? classes.startIconActive : classes.starIcon } />
          <StarIcon className={clientFeedback(job) >= 4 ? classes.startIconActive : classes.starIcon } />
          <StarIcon className={clientFeedback(job) >= 4.5 ? classes.startIconActive : classes.starIcon } />
        </div>
        <div className={classes.metaText}>
          <div>
            <strong>{totalSpentReadable(job)} spent</strong>
          </div>
        </div>
        <div className={classes.locationContainer}>
          <LocationIcon />
          <div className={classes.locationText}>
            <strong>{getCountry(job)}</strong>
          </div>
        </div>
      </div>

    </div>
  );
};

Job.propTypes = {
  classes: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Job);
