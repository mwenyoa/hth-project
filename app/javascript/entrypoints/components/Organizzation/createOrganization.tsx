import React, { useState } from "react";
import { AppDispatch } from "../../Store";
import { useDispatch } from "react-redux";
import { useStyles } from "../../Styles";
import { Button, Card, Container, TextField } from "@material-ui/core";
import { createOrganization } from "../../Redux/Services/orgenization";
import useSweetAlert from "../../hooks/useSweetAlert";

type Props = {};

interface formValues {
  name: string;
  logo: Blob | File | null;
  mission: string;
  vision: string;
}

const dataState = {
  name: "",
  logo: null,
  mission: "",
  vision: "",
};

const CreateOrganization = (props: Props) => {
  const [values, setValues] = useState<formValues>(dataState);
  const [selectedLogo, setSelectedLogo] = useState<Blob | null>(values.logo);
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const { ShowAlert } = useSweetAlert(props);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Values: ", values);
    
    if (e.target.files && e.target.files?.length > 0) {
      setSelectedLogo(e.target.files?.[0]);
      console.log(e.target.files?.[0]);
      
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log(e.target.value );
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, logo, mission, vision } = values;
    if (name && vision && mission !== "" && selectedLogo !== null) {
      const orgData = new FormData();
      orgData.append("organization[name]", name);
      orgData.append("organization[vision]", vision);
      orgData.append("organization[mission]", mission);
      orgData.append("organization[logo]", selectedLogo as Blob);
      dispatch(createOrganization(orgData)).then((res: any) => {

        console.log("orgData :", orgData);
        
        console.log("res: ", res);
        
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "Organization created Successully.",
            icon: "success",
            time: 2000,
          });
          setValues(dataState);
          setSelectedLogo(null);
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
    <section className={classes.section}>
      <Container>
        <Card elevation={4} className={classes.form_card}>
          <h1 className={classes.page_title}> Create Organization </h1>
          <form onSubmit={submitHandler} className={classes.form}>
            <TextField
              name="name"
              label="Name"
              value={values.name}
              onChange={changeHandler}
              variant="outlined"
            />
              <TextField
              name="mission"
              label="Mission"
              value={values.mission}
              onChange={changeHandler}
              variant="outlined"
            />
             <TextField
              name="vision"
              label="Vision"
              value={values.vision}
              onChange={changeHandler}
              variant="outlined"
              />

              <TextField
              name="logo"
              type="file"
              onChange={(e: any )=> setSelectedLogo(e.target.files![0])}
              variant="outlined"
              />
              <Button type="submit" variant="contained" className={classes.submitBtn}>Create</Button>
          </form>
        </Card>
      </Container>
    </section>
  );
};

export default CreateOrganization;
