import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";

type Props = {};

const Helpcards = (props: Props) => {
  const classes = useStyles()
  return (
    <section>
      <Container className={classes.helpcard_section}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card elevation={4} className={classes.helpcard}>
              <CardHeader title="Fund Project" className={classes.card_title}/>
              <CardContent>
                <Typography className={classes.card_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </Typography>
              </CardContent>
              <CardActions className={classes.card_btn}>
                <Button variant="contained"  color="primary" className={classes.bckHomeBtn}>Donate</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card elevation={4} className={classes.helpcard}>
              <CardHeader title="Fund Project" className={classes.card_title}/>
              <CardContent>
                <Typography className={classes.card_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </Typography>
              </CardContent>
              <CardActions className={classes.card_btn}>
                <Button variant="contained"  color="primary" className={classes.bckHomeBtn}>Donate</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card elevation={4} className={classes.helpcard}>
              <CardHeader title="Fund Project" className={classes.card_title}/>
              <CardContent>
                <Typography className={classes.card_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </Typography>
              </CardContent>
              <CardActions className={classes.card_btn}>
                <Button variant="contained"  color="primary" className={classes.bckHomeBtn}>Donate</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Helpcards;
