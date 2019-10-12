const styles = theme => ({
  container: {
    marginBottom: '10px'
  },
  description: {
    marginTop: '14px',
    fontWeight: 400
  },
  skills: {
    margin: '10px 0 5px'
  },
  chip: {
    cursor: 'pointer',
    margin: '0 5px 10px'
  },
  meta: {
    display: 'flex',
    marginTop: '5px',
    flexDirection: 'row'
  },
  metaText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  locationContainer: {
    display: 'flex',
    marginLeft: '15px',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rating: {
    top: '1px',
    color: '#dedede',
    margin: '0 15px 0 20px',
    position: 'relative',
  },
  starIcon: {
    color: theme.palette.text.secondaryLight
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  verifiedIcon: {
    color: '#14BFF4'
  },
  startIconActive: {
    color: theme.palette.primary.main
  }
});

export default styles;
