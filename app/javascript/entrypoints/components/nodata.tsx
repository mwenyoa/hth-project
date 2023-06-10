import React from "react";
import { Container, Grid, Card, Typography, Button } from "@material-ui/core";
import {  HourglassEmpty } from "@material-ui/icons";
import { Link } from "react-router-dom";

type Props = {
  data_text: string;
  classes:any
};

const NoData = ({ data_text, classes }: Props) => {
  return (
    <Container className={classes.nodata_section}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card elevation={2} variant="elevation" >
            <Typography variant="h5" className={classes.no_data_text}>
              <span>
                <HourglassEmpty fontSize="large" />
              </span>
              <span> {data_text} </span>
            </Typography>
            <Typography variant="h5" className={classes.no_data_text}>
              <Link to={"/"}>
                <span>
                  <Button variant="outlined" className={classes.bckHomeBtn}>
                     Back Home
                  </Button>
                </span>
              </Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NoData;
