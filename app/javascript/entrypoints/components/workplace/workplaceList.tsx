import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  CardMedia,
} from "@material-ui/core";
import useFetchWorkPlaces from "../../hooks/useFetchWorkplaces";
import { useStyles } from "../../Styles";
import NoData from "../nodata";
import Loading from "../loading";

type Props = {};

const WorkplaceList = (props: Props) => {
  const classes = useStyles();
  const { status, workplace } = useFetchWorkPlaces(props);
  console.log("Workplaces", workplace);
  const nodata = "No workplaces to show";

  return (
    <section className={classes.section_area}>
      {status === "pending" ? (
        <Loading />
      ) : workplace.length > 0 && status === "succeeded" ? (
        <Container>
          <Grid container spacing={3}>
            {workplace?.map((wplace) => (
              <Grid item xs={12} sm={12} key={wplace.id}>
                <Card elevation={4}>
                  <CardHeader>
                    <Typography variant="h4" component={"blockquote"}>
                      {wplace?.name}
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Grid container spacing={3}>
                      {wplace.workplace_images?.map((image) => (
                        <Grid item sm={12} md={4} key={image.id}>
                          <CardMedia component={"img"} image={image.url} />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : status === "succeeded" && workplace.length === 0 ? (
        <NoData data_text={nodata} classes={classes} />
      ) : null}
    </section>
  );
};

export default WorkplaceList;
