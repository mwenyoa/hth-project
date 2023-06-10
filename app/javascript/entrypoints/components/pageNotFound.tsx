import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { useStyles } from '../Styles';


const PageNotFound = () => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
      <Typography variant="h1" className={classes.heading}>
        4 0 4
      </Typography>
      <Typography variant="h4" className={classes.description}>
        Oops! It seems you've wandered off into uncharted territory.
      </Typography>
      <Typography variant="h6">
        We couldn't find the page you were looking for.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.bckHomeBtn}
        href="/#"
      >
        Go Back Home
      </Button>
    </section>
  );
};

export default PageNotFound;
