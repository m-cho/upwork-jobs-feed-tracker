import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
  title: {
    marginTop: 0
  },
  card: {
    position: 'fixed',
    width: '300px'
  },
  divider: {
    margin: '5px 0',
  },
  select: {
    position: 'relative',
    bottom: '3px',
    fontWeight: 500,
  },
  selectInput: {
    color: theme.palette.text.secondary
  }
});

export default styles;
