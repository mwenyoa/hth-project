import React from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Box,
  CardMedia,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../Styles";
import useFetchUsers from "../../hooks/useFetchUsers";
import NoData from "../nodata";
import Loading from "../loading";
import {
  DeleteOutlineOutlined, VerifiedUserRounded,
} from "@material-ui/icons";
import useSweetConfirm from "../../hooks/useSweetConfirm";
import useSweetDelete from "../../hooks/useSweetDelete";
import { convertDate } from "../../utils";
import { PhoneIphone } from "@mui/icons-material";
import { VerifiedUserOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

type Props = {};

const UserListing = (props: Props) => {
  const classes = useStyles();
  const {ShowAskDelete} = useSweetDelete(props)
  const nodata = "No users to show";

  const userDeleteHandler = (userid) => {
    console.log("Current user ID: ", userid);
  };
  const { users, isloading } = useFetchUsers(props)

  return (
    <section className={classes.section_area}>
      {isloading === "pending" ? (
        <Loading />
      ) : isloading === "loaded" && users.length > 0 ? (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <VerifiedUserOutlined />
                 <Typography variant="h4">List Of System users</Typography>
            </Grid>
            {users.map((user) => (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={user.id}>
                <Card elevation={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontWeight: 'bold',
                      flexFlow: "wrap",
                    }}
                  >
                    <Typography variant="h6">
                      <CardMedia
                        component={"img"}
                        image={user.picture}
                        alt={user ? `${user.firstname}` : "user Photo"}
                        className={classes.user_image}
                      />
                    </Typography>
                    <Typography><Link to={`/users-list/${user.id}`}>{user.firstname}</Link></Typography>
                    <Typography><Link to={`/users-list/${user.id}`}>{user.lastname}</Link></Typography>
                    <Typography>{user.email}</Typography>
                    <Typography><span><PhoneIphone /></span><span>{user.phoneno }</span></Typography>
                    <Typography>{convertDate(user.created_at)}</Typography>
                    <Typography>{ user.usertype }</Typography>
                    <Typography>
                      <Button
                        onClick={() => userDeleteHandler(user.id)}
                        color="primary"
                      >
                        <DeleteOutlineOutlined fontSize="large" />
                      </Button>
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : isloading === "loaded" && users.length === 0 ? (
        <NoData data_text={nodata} classes={classes} />
      ) : null}
    </section>
  );
};

export default UserListing;
