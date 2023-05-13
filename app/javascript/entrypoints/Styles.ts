import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  // Header

  hedader: {
    backgroundColor: "teal !important",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "wrap",
    flexGrow: 1,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    width: "20%",
  },

  link: {
    textDecoration: "none",
    color: "#fff",
    marginLeft: '20px'
  },
  nav: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: 'center',
    flexFlow: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  section: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(2),
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        margin: "10px auto",
      },
    },
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  page_title: {
    textAlign: "center",
  },

  form_card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    margin: "10% auto",
    padding: "2px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "50% auto",
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "5% auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "5%  auto",
    },
  },
  form_area: {
    backgroundColor: "2e2e2e",
    width: "100%",
  },
  footer: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-evenly",
    textAlign: "center",
    alignItems: "center",
    left: 0,
    bottom: 0,
    position: "fixed",
    height: "auto",
    minHeight: "5%",
    width: "100%",
    backgroundColor: "lightgray",
    color: "teal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  submitBtn: {
    width: "100%",
    height: "100%",
    borderColor: "teal",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto !important",
    },
  },
}));
