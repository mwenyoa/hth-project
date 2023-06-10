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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { History, Delete, Edit, LinkRounded } from "@material-ui/icons";
import { limitString, getYear } from "../../utils";
import useFetchHistories from "../../hooks/useFetchHistories";
import { useStyles } from "../../Styles";
import DeleteHistory from "../Auth/deleteHistory";
import UpdateHistory from "../Auth/updateHistory";
import NoData from "../nodata";
import Loading from "../loading";

type Props = {};

const HistoryList = (props: Props) => {
  const [show, setShow] = useState(false);
  const [erase, setErase] = useState({ his: 0, org: 0 });
  const [curhist, setCurHist] = useState({ his: 0, org: 0 });
  const nodata = "No history to show";

  const classes = useStyles();
  const { history, isLoading } = useFetchHistories(props);

  const showModal = (his: number, org: number) => {
    setShow(true);
    setCurHist({ his, org });
    return;
  };

  const eraseHistory = (his: number, org: number) => {
    setShow(false);
    setErase({ his, org });
    return;
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <section className={classes.section_area}>
      {isLoading === "pending" ? (
        <Loading />
      ) : isLoading === "succeeded" && history.length > 0 ? (
        <Container>
          <Box className={classes.box}>
            <Typography variant="h4">
              <History /> Our Rich History
            </Typography>
            <Divider variant="fullWidth" />
          </Box>
          <Grid container spacing={4}>
            {history?.map((hist) => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={hist.id}>
                <Card className={classes.history_card} elevation={4}>
                  <Box className={classes.box}>
                    <Typography variant="h4">
                      {getYear(hist.event_date)}
                    </Typography>
                  </Box>

                  <CardContent className={classes.card_content}>
                    <CardMedia
                      component={"img"}
                      image={hist.image}
                      alt="history image"
                      className={classes.card_image}
                    />
                    <Box className={classes.box}>
                      <Typography variant="h5">{hist.event_title}</Typography>
                    </Box>
                    <Typography>{limitString(hist.description, 3)}</Typography>
                  </CardContent>
                  <CardActionArea>
                    <CardActions className={classes.card_actions}>
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
                          id="editBtn"
                        >
                          <Edit />
                        </Button>
                        <Button
                          variant="text"
                          onClick={() =>
                            eraseHistory(hist.id, hist.organization.id)
                          }
                          id="delBtn"
                        >
                          <Delete />
                        </Button>
                      </span>
                    </CardActions>
                  </CardActionArea>
                  {show && curhist.his === hist.id && (
                    <UpdateHistory
                      open={show}
                      history={hist}
                      handleClose={handleClose}
                    />
                  )}
                  {erase.his === hist.id && erase.org && (
                    <DeleteHistory
                      history_id={erase.his}
                      organization_id={erase.org}
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
      ) : isLoading === "succeeded" && history.length === 0 ? (
        <NoData data_text={nodata} classes={classes} />
      ) : null}
    </section>
  );
};

export default HistoryList;
