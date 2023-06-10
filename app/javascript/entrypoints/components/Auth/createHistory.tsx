import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Grid, TextField, FormControl } from "@material-ui/core";
import { useStyles } from "../../Styles";
import { useDispatch } from "react-redux";
import useSweetAlert from "../../hooks/useSweetAlert";
import { AppDispatch } from "../../Store";
import useFetchOrganizations from "../../hooks/usefetchorg";
import { postHistory } from "../../Redux/Services/history";
import useFetchHistories from "../../hooks/useFetchHistories";



interface historyFace {
  title: string;
  description: string;
  date: string;
  link: string;
  organization_id: number | any
}

const historyState = {
  title: "",
  description: "",
  date: "",
  link: "",
  organization_id: 0
};

type Props = {};

const CreateHistory = (props: Props) => {
  const [values, setValues] = useState<historyFace>(historyState);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { ShowAlert } = useSweetAlert(props);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const classes = useStyles();
  const organizations = useFetchOrganizations();
  const histories = useFetchHistories({});
  console.log('histories', histories);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, files } = e.target;
    if (files && files?.length > 0) {
      setSelectedImage(files?.[0]);
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, link, date, organization_id } = values;
    if (title && description && link !== "" && selectedImage !== null) {
      const historyData: any = new FormData();
      const organization = parseInt(organization_id);
      historyData.append("history[event_title]", title);
      historyData.append("history[description]", description);
      historyData.append("history[link]", link);
      historyData.append("history[image]", selectedImage as Blob);
      historyData.append("history[event_date]", date);
      historyData.append("history[organization_id]", organization);
      const history = {
        historyData,
        organization_id: organization,
      };

      dispatch(postHistory(history)).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "History created Successully.",
            icon: "success",
            time: 2000,
          });
          setValues(historyState);
          setSelectedImage(null);
        } else {
          ShowAlert({
            title: "Error",
            text: res.error.message,
            icon: "error",
            time: 2000,
          });
        }
      });
    } else {
      ShowAlert({
        title: "Error",
        text: "All form fields require values",
        icon: "error",
        time: 2000,
      });
    }
  };

  return (
    <section className={classes.section_area}>
      <Container>
         <Grid container spacing={2}>
         <Grid item className={classes.section}>
          <Card elevation={4} className={classes.form_card} variant="outlined">
            <h1 className={classes.page_title}> Add History</h1>
            <form onSubmit={submitHandler} className={classes.form}>
              <TextField
                name="title"
                label="Title"
                value={values.title}
                onChange={changeHandler}
                variant="outlined"
              />
              <TextField
                name="description"
                label="Description"
                value={values.description}
                onChange={changeHandler}
                variant="outlined"
              />
              <TextField
                name="link"
                label="Link to article or post"
                type="url"
                value={values.link}
                onChange={changeHandler}
                variant="outlined"
              />
        
             <TextField
               id="outlined-select-currency-native"
               select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                onChange={changeHandler}
                name="organization_id"
              >
                <option value="" selected disabled>
                  Select Organization
                </option>
                {organizations?.map((option) => (
                  <option key={option?.id} value={option?.id}>
                    {option?.name}
                  </option>
                ))}
              </TextField>
              <br
               
             />
                <TextField
                name="date"
                type="date"
                value={values.date}
                onChange={changeHandler}
                variant="outlined"
              />
             
              <TextField
                name="logo"
                type="file"
                onChange={changeHandler}
                variant="outlined"
                itemType="*image"
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.submitBtn}
                size="large"
              >
                Create
              </Button>
            </form>
          </Card>
        </Grid>
         </Grid>
      </Container>
    </section>
  );
};

export default CreateHistory;
