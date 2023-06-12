import React from "react";
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
import useFetchAdmin from "../../hooks/useFetchAdmin";
import NoData from "../nodata";
import Loading from "../loading";
import { convertDate } from "../../utils";
import { Edit, Delete } from "@material-ui/icons";

type Props = {
  toggler?: Boolean;
};

const AdminDetails = ({ toggler }: Props) => {
  const params = useParams<Readonly<Params<string>>>();
  const id: number = parseInt(params?.id);
  const { admin, isLoading } = useFetchAdmin(id);
  const classes = useStyles();
  const nodata: string = "No admin to show";

  const editAdmin = (editId: number) => {};
  const deleteAdmin = (delId: number) => {};
  return (
    <section className={classes.section_area}>
      {isLoading === "pending" ? (
        <Loading />
      ) : admin !== undefined && isLoading === "loaded" ? (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card elevation={2}>
                <CardHeader title={"Admin Information"} />
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Card elevation={4} className={classes.image_card}>
                        <CardMedia
                          component={"img"}
                          alt="User Image"
                          src={admin.photo}
                          className={classes.user_detials_image}
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <Card elevation={4} className={classes.user_card}>
                        {" "}
                        <Typography
                          className={classes.details_text}
                        >
                          <span> FirstName:</span>
                          <span>{admin.firstname}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        {" "}
                        <Typography
                          className={classes.details_text}
                        >
                          <span>LastName</span>
                          <span>{admin.lastname}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography
                          className={classes.details_text}
                        >
                          <span> Email:</span> <span>{admin.email}</span>
                        </Typography>
                      </Card>
                      <Card elevation={4} className={classes.user_card}>
                        <Typography
                          className={classes.details_text}
                        >
                          <span>Admin Since:</span>
                          <span>{convertDate(admin.created_at)}</span>
                        </Typography>
                      </Card>
                      <Grid item xs={12}><Button
                    onClick={() => editAdmin(admin.id)}
                    color="primary"
                  >
                    <Edit />
                  </Button>
                  <Button
                    onClick={() => deleteAdmin(admin.id)}
                    color="secondary"
                  >
                    <Delete />
                  </Button></Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : isLoading === "loaded" && admin === undefined ? (
        <NoData data_text={nodata} classes={classes} />
      ) : null}
    </section>
  );
};

export default AdminDetails;
