import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from '../../Styles'
import Typical from 'react-typical';

type Props = {};

const Hero = (props: Props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.hero_section}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
         <Typography variant="h4" className={classes.hero_title}>
            Welcome to the Helping The Helpless organization
          </Typography>
          <Typography variant="h6" className={classes.hero_subtitle}>
          <Typical
              loop={Infinity}
              wrapper="li"
              steps={[
                'Helping The Helpless',
                3000,
                'Through the litle we have',
                3000,
                'Preaching the gospel of Christ',
                3000,
                'For a better tomorrow',
                3000,
              ]}
            />
          </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
