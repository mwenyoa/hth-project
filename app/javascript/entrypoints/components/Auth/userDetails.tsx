import React, { SetStateAction, useState } from "react";
import { useParams, Params } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../Styles";
import NoData from "../nodata";
import Loading from "../loading";
import { convertDate } from "../../utils";
import { Edit, Delete } from "@material-ui/icons";
import useFetchUser from "../../hooks/useFetchUser";
import UpdateUser from "./updateUser";

type Props = {
  toggler?: Boolean;
};

const UserDetails = ({ toggler }: Props) => {
  const [show, setShow] = useState(false)
  const params = useParams<Readonly<Params<string>>>();
  const id: number = parseInt(params?.id);
  const { user, isLoading } = useFetchUser(id);
  const classes = useStyles();
  const nodata: string = "No user to show";

  const editUser = (editId: number) => {};
  const deleteUser = (delId: number) => {};
  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  return (
    <section className={classes.section_area}>
      {isLoading === "pending" ? (
        <Loading />
      ) : user !== undefined && isLoading === "loaded" ? (
        <>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card elevation={2}>
                <CardHeader title={"User Information"} />
                <CardContent>
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                        <Button
                          onClick={handleOpen}
                          color="primary"
                        >
                          <Edit />
                        </Button>
                        <Button
                          onClick={() => deleteUser(user.id)}
                          color="secondary"
                        >
                          <Delete />
                        </Button>
                      </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Card elevation={4} className={classes.image_card}>
                        <CardMedia
                          component={"img"}
                          alt="User Image"
                          src={user.picture}
                          className={classes.user_detials_image}
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography className={classes.details_text}>
                          <span> FirstName:</span>
                          <span>{user.firstname}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography className={classes.details_text}>
                          <span>LastName</span>
                          <span>{user.lastname}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography className={classes.details_text}>
                          <span> Date Of Birth:</span>{" "}
                          <span>{convertDate(user.dob)}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography className={classes.details_text}>
                          <span> Email:</span> <span>{user.email}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography className={classes.details_text}>
                          <span>Member Since:</span>
                          <span>{convertDate(user.created_at)}</span>
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card elevation={4} className={classes.user_card_below}>
                        <Typography className={classes.details_text}>
                          <span> City:</span> <span>{user.city}</span>
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card elevation={4} className={classes.user_card_below}>
                        <Typography className={classes.details_text}>
                          <span> Country:</span> <span>{user.country}</span>
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card elevation={4} className={classes.user_card_below}>
                        <Typography className={classes.details_text}>
                          <span> Nationality:</span> <span>{user.nationality}</span>
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card elevation={4} className={classes.user_card_below}>
                        <Typography className={classes.details_text}>
                          <span> Phone Number:</span> <span>{user.phoneno}</span>
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card elevation={4} className={classes.user_card_below}>
                        <Typography className={classes.details_text}>
                          <span> Member Type:</span> <span>{user.usertype}</span>
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card elevation={4} className={classes.user_card_below}>
                        <Typography className={classes.details_text}>
                          <span> Occupation</span> <span>{user.occupation}</span>
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <UpdateUser handleClose={handleClose} open={show}  user={user}/>
        </>
      ) : isLoading === "loaded" && user === undefined ? (
        <NoData data_text={nodata} classes={classes} />
      ) : null}
    </section>
  );
};

export default UserDetails;

