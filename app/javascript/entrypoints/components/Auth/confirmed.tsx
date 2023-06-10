import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  Button,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "../../Styles";
import { ContactMail } from "@material-ui/icons";

type Props = {};

const Confirmed = (props: Props) => {
  const classes = useStyles();
  return (
    <section className={classes.confirmation}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Card
              elevation={4}
              className={classes.form_card}
              variant="outlined"
            >  
                <Typography variant="h4" align="center">
                        <ContactMail fontSize="large" />
                </Typography>
              <Typography variant="h5" align="center">
                Your email has been confirmed
              </Typography>
              <CardActionArea>
                <Typography variant="h6" align="center">
                  Now login to your account
                </Typography>
                <Button
                  href="/#/login"
                  variant="contained"
                  className={classes.submitBtn}
                >
                  Login Here
                </Button>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Confirmed;
