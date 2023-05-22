import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Box,
  Divider,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { History, Delete, Edit, LinkRounded } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { limitString, getYear } from "../../utils";
import useFetchHistories from "../../hooks/useFetchHistories";
import UpdateHistory from "../Authorized/updateHistory";
import { useStyles } from "../../Styles";

type Props = {};

const HistoryList = (props: Props) => {
  const [show, setShow] = useState(false);
  const [curhist, setCurHist] = useState({
    his: 0,
    org: 0,
  });
  const dispatch: AppDispatch = useDispatch();
  const classes = useStyles();
  const { history, isLoading } = useFetchHistories(props);
  
  const showModal = (his:number, org: number) => {
    setShow(true);
    setCurHist({his, org});
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <section className={classes.history_section}>
      {isLoading === "pending" ? (
        <span className={classes.loading}>
          LOADING...
          <CircularProgress aria-busy={true} aria-describedby="LOADING..." />
        </span>
      ) : (
        <Container>
          <Box className={classes.box}>
            <Typography variant="h4">
              <History /> Our Rich History
            </Typography>
            <Divider variant="fullWidth" />
          </Box>
          <Grid container spacing={4}>
            {history?.payload?.map((hist) => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={hist.id}>
                <Card className={classes.history_card} elevation={4}>
                  <Box className={classes.box}>
                    <Typography variant="h4">
                      {getYear(hist.event_date)}
                    </Typography>
                  </Box>
                  <CardContent className={classes.card_content}>
                    <CardMedia>
                      <img
                        src={hist.image}
                        alt="history image"
                        className={classes.card_image}
                      />
                    </CardMedia>
                    <Box className={classes.box}>
                      <Typography variant="h5">{hist.event_title}</Typography>
                    </Box>
                    <Typography>{limitString(hist.description, 3)}</Typography>
                  </CardContent>
                  <CardActionArea>
                    <CardActions>
                      <span>
                        <Link to={hist.link}>
                          <LinkRounded />
                          Link
                        </Link>
                        <Button
                          onClick={() =>
                            showModal(hist.id, hist.organization.id)
                          }
                          variant="text"
                        >
                          <Edit />
                        </Button>
                        <Button variant="text">
                          <Delete />
                        </Button>
                      </span>
                    </CardActions>
                  </CardActionArea>
                  {curhist.his === hist.id && show &&  (
                    <UpdateHistory
                      open={show}
                      history={hist}
                      handleClose={handleClose}
                    />
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box className={classes.box}>
            <Divider variant="fullWidth" />
          </Box>
        </Container>
      )}
    </section>
  );
};

export default HistoryList;
