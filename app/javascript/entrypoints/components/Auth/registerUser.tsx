import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import 'react-phone-input-2/lib/style.css';
import countryList from "react-select-country-list";
import {Container, Grid, Card, TextField, Button,
   Typography, MenuItem } from "@material-ui/core";
import { AppDispatch } from "../../Store";
import useSweetAlert from "../../hooks/useSweetAlert";
import { useStyles } from "../../Styles";
import useFetchOrganizations from "../../hooks/usefetchorg";
import { PersonAdd, VerifiedUser } from "@material-ui/icons";
import { userTypes, userRoles } from "../../utils";
import { createUser } from "../../Redux/Services/user";


type Props = {};
interface FormValues {
  fname: string;
  lname: string;
  email: string;
  dob: string;
  city: string;
  country: string;
  nationality: string;
  phoneno: string;
  usertype: string;
  occupation: string;
  organization_id: number;
}


const initialUser: FormValues = {
  fname: "",
  lname: "",
  email: "",
  dob: "",
  city: "",
  country: "",
  nationality: "",
  phoneno: "",
  usertype: "",
  occupation: "",
  organization_id: 0,
};

const RegisterUser: React.FC<Props> = (props: Props) => {
  const [values, setValues] = useState<FormValues>(initialUser);
  const [selectedFile, setSelectedFile] = useState<Blob | File | null>(null);
  const dispatch: AppDispatch = useDispatch()
  const classes = useStyles();
  const organizations = useFetchOrganizations();
  const { ShowAlert } = useSweetAlert(props);
  const options = useMemo(() => countryList().getData(), []);
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "user_picture") {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile(e.target.files![0]);
      }
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      fname,lname, email, dob, city,
      country, nationality, phoneno, usertype, organization_id,
      occupation
    } = values;
    if (
      fname && lname && email && dob && city
      && country && nationality && phoneno && usertype !== ""
       && occupation && organization_id !== 0 && selectedFile !== null
    ) {
          const org_id: number = parseInt(organization_id)
          
      const userData = new FormData();
       userData.append('participant[firstname]', fname)
       userData.append('participant[lastname]', lname)
       userData.append('participant[email]', email)
       userData.append('participant[dob]', dob)
       userData.append('participant[city]', city)
       userData.append('participant[country]', country)
       userData.append('participant[nationality]', nationality)
       userData.append('participant[phoneno]', phoneno)
       userData.append('participant[usertype]', usertype)
       userData.append('participant[organization_id]', org_id)
       userData.append('participant[occupation]', occupation)
       userData.append('participant[picture]', selectedFile as Blob)
       console.log("userData", userData);
       dispatch(createUser({userData})).then((res: any) => {
        console.log("user dispatch response: ", res);
        if(res.payload !== undefined){
          ShowAlert({
            title: "Success",
            text: "User Registration Successful",
            icon: "success",
            time: 2000,
          });
          setValues(initialUser)
        }
         if(res.payload === undefined){
          ShowAlert({
            title: "Error",
            text: res.error.message,
            icon: "error",
            time: 2000,
          });
         }
       })
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
          <Typography className={classes.title} variant="h4">
            <PersonAdd fontSize="large" />
          </Typography>
          <Typography className={classes.title} variant="h4">
            Member Registration 
          </Typography>
          <form onSubmit={registerHandler} className={classes.form}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="fname"
                  label="Firstname"
                  value={values.fname}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="lname"
                  label="Lastname"
                  value={values.lname}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="dob"
                  label="Date Of Birth"
                  type="date"
                  value={values.dob}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="phoneno"
                  label="Phone Number"
                  value={values.phoneno}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="nationality"
                  label="Nationality"
                  value={values.nationality}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  select
                  name="country"
                  label="Country"
                  value={values.country}
                  onChange={changeHandler}
                  variant="outlined"
                >
                  {options.map((country) => (
                    <MenuItem key={country.value} value={country.label}>
                      {country.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  select
                  name="usertype"
                  label="Type of User"
                  value={values.usertype}
                  onChange={changeHandler}
                  variant="outlined"
                >
                  {userTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  <option value="" disabled>
                    Select Organization
                  </option>
                  {organizations?.map((option) => (
                    <option key={option?.id} value={option?.id}>
                      {option?.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="occupation"
                  label="Occupation"
                  value={values.occupation}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  name="user_picture"
                  type="file"
                  onChange={changeHandler}
                  inputProps={{ multiple: false }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button type="submit" className={classes.submitBtn}>
              Save Info
            </Button>
          </form>
        </Card>
      </Container>
    </section>
  );
};

export default RegisterUser;
