import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import useSweetAlert from "../../hooks/useSweetAlert";
import { useStyles } from "../../Styles";
import {
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { createAdmin } from "../../Redux/Services/admin";
import { PersonAddRounded } from "@material-ui/icons";

type Props = {};

interface User {
  fname: string;
  lname: string;
  email: string;
  passw: string;
  picture?: string | null | Blob;
}

const userInfo: User = {
  fname: "",
  lname: "",
  email: "",
  passw: "",
  picture: null,
};

const RegisterAdmin = (props: Props) => {
  const classes = useStyles();
  const [values, setValues] = useState<User>(userInfo);
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
  const { ShowAlert } = useSweetAlert(props);
  const dispatch: AppDispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files?.length > 0) {
      setSelectedFile(files![0]);
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fname, lname, email, passw } = values;
    if (fname && lname && email && passw !== "" && selectedFile !== null) {
      if (selectedFile.size > 1048576) {
        ShowAlert({
          title: "Alert",
          text: "Image size must be less than 1MB",
          icon: "warning",
          time: 2500,
        });
        return;
      } else {
        const userData: any = new FormData();
        userData.append("user[firstname]", fname);
        userData.append("user[lastname]", lname);
        userData.append("user[email]", email);
        userData.append("user[password]", passw);
        userData.append("user[photo]", selectedFile as Blob);
        const user = { user: userData };
        dispatch(createAdmin(user)).then((res: any) => {
          if (res.payload !== undefined) {
            ShowAlert({
              title: "Success",
              text: "Admin created sucessfully",
              icon: "success",
              time: 2500,
            });
            setValues(userInfo);
          } else {
            ShowAlert({
              title: "Error",
              text: res.error.message,
              icon: "error",
              time: 2500,
            });
          }
        });
      }
    } else {
      ShowAlert({
        title: "Alert",
        text: "All form fields require values",
        icon: "warning",
        time: 2500,
      });
    }
  };

  return (
    <section className={classes.section_area}>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.section}>
            <Card
              elevation={4}
              variant="outlined"
              className={classes.form_card}
            >
              {" "}
              <PersonAddRounded fontSize="large" />
              <Typography variant="h5">Create an admin Account</Typography>
              <form onSubmit={submitHandler} className={classes.form}>
                <TextField
                  name="fname"
                  label="FirstName"
                  value={values.fname}
                  onChange={changeHandler}
                  variant="outlined"
                />
                <TextField
                  name="lname"
                  label="LastName"
                  value={values.lname}
                  onChange={changeHandler}
                  variant="outlined"
                />
                <TextField
                  name="email"
                  type="email"
                  label="Email Address"
                  value={values.email}
                  onChange={changeHandler}
                  variant="outlined"
                />
                <TextField
                  name="passw"
                  label="Password"
                  type="password"
                  value={values.passw}
                  onChange={changeHandler}
                  variant="outlined"
                />
                <TextField
                  name="picture"
                  type="file"
                  onChange={changeHandler}
                  variant="outlined"
                />
                <Button type="submit" className={classes.submitBtn}>
                  Register
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default RegisterAdmin;
