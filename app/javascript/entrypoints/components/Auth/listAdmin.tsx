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
import useFetchAdmins from "../../hooks/useFetchAdmins";
import NoData from "../nodata";
import Loading from "../loading";
import { DeleteOutlineOutlined, VerifiedUserRounded } from "@material-ui/icons";
import useSweetConfirm from "../../hooks/useSweetConfirm";
import useSweetDelete from "../../hooks/useSweetDelete";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { convertDate } from "../../utils";
import { Link } from "react-router-dom";

type Props = {
  toggler?: boolean;
};

const UserListing = (props: Props) => {
  const classes = useStyles();
  const { ShowAskDelete } = useSweetDelete(props);
  const nodata = "No admins to show";

  const adminDeleteHandler = (adminid) => {
    console.log("Current Admin ID: ", adminid);
  };
  const { admins, isLoading } = useFetchAdmins(props);
  return (
    <section className={classes.section_area}>
      {isLoading === "pending" ? (
        <Loading />
      ) : isLoading === "loaded" && admins.length > 0 ? (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <AdminPanelSettingsIcon fontSize="large" />
              <Typography variant="h4">List Of System Admins</Typography>
            </Grid>
            {admins?.map((admin) => (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={admin.id}>
                <Card elevation={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      fontWeight: "bold",
                      flexFlow: "wrap",
                    }}
                  >
                    <Typography variant="h6">
                      <CardMedia
                        component={"img"}
                        image={admin.photo}
                        alt={admin ? `${admin.firstname}` : "Admin Photo"}
                        className={classes.user_image}
                      />
                    </Typography>
                    <Typography>
                      <Link to={`/admins-list/${admin.id}`}>
                        {admin.firstname}
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={`/admins-list/${admin.id}`}>
                        {admin.lastname}
                      </Link>
                    </Typography>
                    <Typography>{admin.email}</Typography>
                    <Typography>
                      {admin.confirmed_at ? (
                        `${(<VerifiedUserRounded />)}${admin.confirmed_at}`
                      ) : (
                        <span>
                          <span>
                            <VerifiedUserRounded fontSize="medium" />{" "}
                          </span>{" "}
                          <span>Unconfirmed</span>
                        </span>
                      )}
                    </Typography>
                    <Typography>{convertDate(admin.created_at)}</Typography>
                    <Typography>
                      <Button
                        onClick={() => adminDeleteHandler(admin.id)}
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
      ) : isLoading === "loaded" && admins.length === 0 ? (
        <NoData data_text={nodata} classes={classes} />
      ) : null}
    </section>
  );
};

export default UserListing;
