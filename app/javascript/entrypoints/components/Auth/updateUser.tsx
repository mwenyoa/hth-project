import React, { FormEvent, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import {
  CancelOutlined,
  CancelRounded,
  SaveAltSharp,
} from "@material-ui/icons";
import { AppDispatch } from "../../Store";
import { useStyles } from "../../Styles";
import useSweetAlert from "../../hooks/useSweetAlert";
import useSweetConfirm from "../../hooks/useSweetConfirm";
import { editUser } from "../../Redux/Services/user";

interface userUpdateParams {
  fname: string;
  lname: string;
  email: string;
  dob: Date;
  city: string;
  occupation: string;
  country: string;
  nationality: string;
  phoneno: string;
  usertype: string;
}

type Props = {
handleClose: () => void;
  open: boolean;
  user: {
    id: number,
    firstname: string;
    lastname: string;
    email: string;
    dob: Date;
    city: string;
    occupation: string;
    country: string;
    nationality: string;
    phoneno: string;
    usertype: string;
  };
};

const UpdateUser = ({ handleClose, open, user }: Props) => {
  const initialInfo: userUpdateParams = {
    fname: user?.firstname || "",
    lname: user?.lastname || "",
    email: user?.email || "",
    dob: user?.dob || "",
    city: user?.city,
    occupation: user?.occupation || "",
    country: user?.country || "",
    nationality: user?.nationality || "",
    phoneno: user?.phoneno || "",
    usertype: user?.usertype || "",
  };
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const [values, setValues] = useState<userUpdateParams>(initialInfo);
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
  const { ShowAlert } = useSweetAlert({});
  const { ShowConfirm } = useSweetConfirm({});
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files, name, value } = e.target;
    if (files && files?.length > 0) {
        setSelectedFile(files![0]);
      } else {
      setValues({ ...values, [name]: value });
    }
  };

  const updateHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClose();
    const { fname, lname, email, dob, city, country,
      phoneno, usertype, occupation, nationality} = values;
    if (fname && lname && email && city && country &&
      phoneno && usertype && occupation && nationality !== "" &&
      selectedFile !== null
    ) {
      const userData = new FormData();
      userData.append("participant[firstname]", fname);
      userData.append("participant[lastname]", lname);
      userData.append("participant[email]", email);
      userData.append("participant[phoneno]", phoneno);
      userData.append("participant[dob]", dob as any);
      userData.append("participant[occupation]", occupation);
      userData.append("participant[city]", city);
      userData.append("participant[country]", country);
      userData.append("participant[nationality]", nationality);
      userData.append("participant[usertype]", usertype);
      userData.append("participant[picture]", selectedFile as Blob);
      const  participant = {
        data: userData,
        user_id: user?.id
      }
      dispatch(editUser({participant})).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "User Info updated Successfully",
            icon: "success",
            time: 2500,
          });
          handleClose();
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
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          zIndex: 100,
        },
      }}
      fullWidth
    >
      <DialogTitle style={{ width: "100%" }} color="blue">
        <span className={classes.title}>
          {" "}
          <Typography variant="h5">Edit User Info</Typography>
          <Button
            onClick={handleClose}
            className={classes.cancelBtn}
            variant="text"
          >
            <CancelRounded />
          </Button>
        </span>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={updateHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="fname"
                label="Firstname"
                value={values.fname}
                margin="dense"
                fullWidth
                variant="standard"
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="lname"
                label="Lastname"
                value={values.lname}
                margin="dense"
                fullWidth
                variant="standard"
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={changeHandler}
                margin="dense"
                fullWidth
                variant="standard"
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="dob"
                label="Date Of Birth"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.dob}
                type="date"
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="phoneno"
                label="Phone Number"
                type="text"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.phoneno}
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="city"
                label="City"
                type="text"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.city}
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="country"
                label="Country"
                type="text"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.country}
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="nationality"
                label="Nationality"
                type="text"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.nationality}
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="occupation"
                label="Occupation"
                type="text"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.occupation}
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="usertype"
                label="User Type"
                type="text"
                margin="dense"
                fullWidth
                variant="standard"
                value={values.usertype}
                onChange={changeHandler}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                name="picture"
                type="file"
                margin="dense"
                fullWidth
                variant="outlined"
                onChange={changeHandler}
                inputProps={{ multiple: false, accept: "*/image" }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center", position: "relative" }}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submitBtn}
                >
                  Save Changes <SaveAltSharp />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;
