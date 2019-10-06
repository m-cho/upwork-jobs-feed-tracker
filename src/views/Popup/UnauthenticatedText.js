import React from 'react';
import { Link } from '@material-ui/core';
import Emoji from '../../components/Emoji/Emoji';

const marginStyle = { margin: '0 5px' };

const UnauthenticatedText = () => (
  <>
    Not authenticated?
    <Emoji
      symbol="🤔"
      style={marginStyle}
    />
    <br />
    Try to
    <Link
      color="primary"
      target="_blank"
      style={marginStyle}
      href="https://www.upwork.com/ab/account-security/login"
    >
      login.
    </Link>
  </>
);

export default UnauthenticatedText;
