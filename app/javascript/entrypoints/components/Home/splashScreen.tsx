import React from "react";
import Helpcards from "./helpcards";
import Hero from "./hero";
import {
  Card,
  Container,
  Grid,
  Typography,
  CardContent,
  Divider,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

import { useStyles } from "../../Styles";

type Props = {};

const SplashScreen = (props: Props) => {
  const classes: ClassNameMap = useStyles();
  return (
    <section className={classes.splash_section}>
      <Hero />
      <Grid container className={classes.call_to_action_text}>
      <Divider variant="fullWidth" />
        <Grid item sm={12} md={12} lg={6}>
          <Card elevation={2} className={classes.splash_card}>
            <Typography variant="h5">
              How to get involved and work with us
            </Typography>
          </Card>
        </Grid>
        <Divider variant="fullWidth" />
      </Grid>
      <Helpcards />
    </section>
  );
};

export default SplashScreen;
