import React from 'react';
import Link from '@material-ui/core/Link';
import Emoji from '../../components/Emoji/Emoji';

const NoNewJobsText = () => (
  <>
    No new jobs so far
    <br />
    You are good
    <Emoji symbol="👍" />
    <br />
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
