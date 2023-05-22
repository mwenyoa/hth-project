import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold"
  },
  section_area: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: '100%',
    height: "100vh",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center'
  },
  // Header
  appBar: {
    backgroundColor: '#2a4d69 !important',
    padding: theme.spacing(1)
  },

  hedader: {
    backgroundColor: "#2a4d69 !important",
    heigt: '200px !important'
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
    marginLeft: '20px',
    cursor: 'pointer',
    [theme.breakpoints.down("sm")]: {
      margin: "10px auto",
  },
  },
  dd_link: {
    textDecoration: "none",
    color: "#000",
    hover: {
      color: '#2a4d69 !important'
    },
    [theme.breakpoints.down("sm")]: {   
      margin: "2px auto",
  },
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
    color: '#2a4d69',
    [theme.breakpoints.down('xs')]:{
      fontSize: '15px'
    }
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

  date_picker: {
    marginBottom: theme.spacing(2),
    width: "100%",
    height: "100%",
    padding: '20px 0',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: '20px',
      margin: "0 auto",
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
    color: "#2a4d69",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  submitBtn: {
    width: "100%",
    height: "100%",
    borderColor: "#2a4d69",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto !important",
    },
  },
  // History
  history_section: {
    width: '100%',
    margin: '10% auto',
    [theme.breakpoints.down('sm')]:{
      margin: '20% auto'
    }
  },
  history_card: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
    objectFit: 'contain',
    backgroundColor: '#eeeeee  !important',
    [theme.breakpoints.down('sm')]:{
      width: '100%',
      height: '100%',
    }
  },
  card_image: {
    width: '100%',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]:{
      width: '100%',
    }
  },
  card_content: {
   
  },
  // Box Styling
  box: {
    textAlign: "center",
     margin: "2% auto"
  },
  // Loader
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    fontSize: "30px",
    color: "#2a4d69",
    fontWeight: "bold",
    zIndex: 1000,
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    transition: "all 3s ease-in-out",
  },

}));
