import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Card, Typography, TextField, Button } from "@material-ui/core";
import { AppDispatch } from "../../Store";
import { useStyles } from "../../Styles";
import { VerifiedUserRounded } from "@material-ui/icons";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import useSweetAlert from "../../hooks/useSweetAlert";
import { loginAdmin } from "../../Redux/Services/admin";
import { NavigateFunction } from "react-router-dom";

type Props = {};

interface loginInfo {
  email: string;
  passw: string;
}

const loginInitial: loginInfo = {
  email: "",
  passw: "",
};

const Login = (props: Props) => {
  const classes: ClassNameMap = useStyles();
  const [values, setValues] = useState<loginInfo>(loginInitial);
  const distpatch: AppDispatch = useDispatch();
  const navigate:NavigateFunction = useNavigate()
  const { ShowAlert } = useSweetAlert(props);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { passw, email } = values;
    if (passw && email !== "") {
      const user = new FormData();
      user.append("user[email]", email);
      user.append("user[password]", passw);
      distpatch(loginAdmin({user})).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "Loggged In Successfully",
            icon: "success",
            time: 2500,
          });
          setValues(loginInitial)
          navigate('/dashboard')
        } else {
          ShowAlert({
            title: "Error",
            text: res.error.message,
            icon: "error",
            time: 3000,
          });
        }
      });
    } else {
      ShowAlert({
        title: "Warning",
        text: "Please fill all the fields",
        icon: "warning",
        time: 2000,
      });
    }
  };

  return (
    <section className={classes.section_area}>
      <Container className={classes.section}>
      <Card elevation={4} className={classes.form_card} variant="outlined">
        <form className={classes.form} onSubmit={loginHandler}>
            <Typography variant="h4" className={classes.title}>
              <span>
                <VerifiedUserRounded fontSize="large" />
              </span>
              <span>Sign In Here</span>
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  name="passw"
                  label="Password"
                  type="password"
                  value={values.passw}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              className={classes.submitBtn}
            >
              Log In
            </Button>
        </form>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
