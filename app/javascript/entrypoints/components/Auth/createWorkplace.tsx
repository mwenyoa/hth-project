import React, { ChangeEvent, FormEvent, useState } from "react";
import { createWorkplace } from "../../Redux/Services/workplace";
import { useDispatch } from "react-redux";
import { useStyles } from "../../Styles";
import { AppDispatch } from "../../Store";
import { Container, Grid, Card, TextField, Button } from "@material-ui/core";
import useFetchOrganizations from "../../hooks/usefetchorg";
import useSweetAlert from "../../hooks/useSweetAlert";
import { Work } from "@material-ui/icons";

type Props = {};

const workplaceState = {
  name: "",
  description: "",
  quicknote: "",
  organization_id: 0,
};

const CreateWorkplace = (props: Props) => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<FileList | null>(null);
  const [values, setValues] = useState(workplaceState);
  const organizations = useFetchOrganizations();
  const { ShowAlert } = useSweetAlert(props);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "workplace_file") {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files); 
      }
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, quicknote, organization_id } = values;
    if (name && description && quicknote !== "" && selectedImage !== null) {
      const workplaceData: any = new FormData();
      const organization: number = parseInt(organization_id);
      workplaceData.append("workplace[name]", name);
      workplaceData.append("workplace[description]", description);
      workplaceData.append("workplace[quicknote]", quicknote);
      workplaceData.append("workplace[organization_id]", organization);
      if (selectedImage) {
        for (let i = 0; i < selectedImage.length; i++) {
          workplaceData.append("workplace[workplace_images][]", selectedImage[i]  as File);
        }
      }
      dispatch(createWorkplace(workplaceData)).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "Workplace Created Successfully",
            icon: "success",
            time: 2000,
          });
          setValues(workplaceState);
          setSelectedImage(null);
        }
        if (res.payload === undefined) {
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
        text: "Please fill all the fields",
        icon: "error",
        time: 2000,
      });
    }
  };

  return (
    <section className={classes.section_area}>
    <Container>
      <Grid item className={classes.section}>
        <Card elevation={4} className={classes.form_card} variant="outlined">
          <h1 className={classes.page_title}> <Work /> Add WorkPlace</h1>
          <form onSubmit={submitHandler} className={classes.form}>
            <TextField
              name="name"
              label="Title"
              value={values.name}
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
              name="quicknote"
              label="Quicknote"
              value={values.quicknote}
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
              value={values.organization_id}
            >
              <option value=""  selected disabled>
                Select Organization
              </option>
              {organizations?.map((option) => (
                <option key={option?.id} value={option?.id}>
                  {option?.name}
                </option>
              ))}
            </TextField>
            <br />

            <TextField
              name="workplace_file"
              type="file"
              onChange={changeHandler}
              variant="outlined"
              inputProps={{ multiple: true }}
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
    </Container>
    </section>
  );
};

export default CreateWorkplace;
