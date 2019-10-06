import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import React from 'react';
import Emoji from '../../components/Emoji/Emoji';

const marginStyle = { margin: '0 5px' };

const NewJobsText = ({ jobs }) => (
  <>
    {
      jobs.length === 1
        ? (
          <span>
            There is one new job!
            <Emoji
              symbol="🔥"
              style={marginStyle}
            />
          </span>
        )
        : (
          <>
            There are
            <span style={marginStyle}>
              {jobs.length}
            </span>
            <span>new jobs</span>
            <Emoji
              symbol="🙌"
              style={marginStyle}
            />
          </>
        )
    }
    <br />
    <Link
      target="_blank"
      color="primary"
      href="/index.html#options"
    >
      Click here to open
    </Link>
  </>
);

NewJobsText.propTypes = { jobs: PropTypes.array.isRequired };

export default NewJobsText;
