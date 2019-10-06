import React from 'react';
import Link from '@material-ui/core/Link';
import Emoji from '../../components/Emoji/Emoji';

const NoNewJobsText = () => (
  <>
    <div style={{ margin: '0 0 5px' }}>
      No new jobs so far
      <br />
      You are good
      <Emoji
        style={{ margin: '0 5px' }}
        symbol="👍"
      />
    </div>
    <Link
      target="_blank"
      color="primary"
      href="/index.html#options"
    >
      View all jobs
    </Link>
  </>
);

export default NoNewJobsText;
