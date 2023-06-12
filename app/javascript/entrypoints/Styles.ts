import { Backdrop, makeStyles, withWidth } from "@material-ui/core";


declare var herobg: any;
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    color: '#2a4d69 !important',
    width: '100% !mportant',
  },
  section_area: {
    flexGrow: 1,
    display: "flex",
    width: '100%',
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '10% auto',
    [theme.breakpoints.down('sm')]:{
      margin: '20% auto !important'
    }
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
        position: 'relative'
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
    color: '#2a4d69 !important',
    zIndex: 100,
    [theme.breakpoints.down('sm')]:{
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
  // buttons
  submitBtn: {
    width: "auto",
    height: "100%",
    borderColor: "#2a4d69",
    backgroundColor: '#2a4d69 !important',
    margin: '10px auto !important',
    color: '#fff !important',
    fontVariant: 'capitalize',
    fontWeight: 'bold',
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto !important",
    },
  },
  cancelBtn: {
    color: '#2a4d69 !important',
    width: 'auto',
    fontWeight: 'bolder'
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
    objectFit: 'cover',
    minHeight: '50%',
    [theme.breakpoints.down('sm')]:{
      width: '100%',
    }
  },
  card_content: {
    padding: theme.spacing
  },
  card_actions: {
    position: "relative",
    left: 0,
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
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
    zIndex: 50,
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  // No data 
  no_data_text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: "gray",
    width: '100%',
    padding: '2%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      alignItems: 'center',
    }
  },
  bckHomeBtn: {
    backgroundColor: "#2a4d69 !important",
    color: '#fff !important',
    fontWeight: 'bold',
    padding: '2%',
    marginTop: theme.spacing(2)
  },
  nodata_section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  //  Home Page Design
  splash_section: {
    width: '100% !important',
    height: 'auto',
    color: theme.palette.common.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '4% auto',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: '5% auto'
    }
  },

  splash_card: {
    borderRadius: '10px !important',
    backgroundColor: '#eee !important',
    color: '#2a4d69 !important'
  },
  // 404 Page
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'linear-gradient(rgba(92,77,105,10)0%, rgba(22,212,255,30) 100%)'
  },
  heading: {
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
  },
  hero_section: {
    backgroundImage:`linear-gradient(to bottom, rgba(0, 46, 72, 0.3) 0%, rgba(100, 45, 24, 0.9)100%), url(${herobg}) `,
    height: '500px',
    width: 'vw !important',
    margin: '0 auto !important',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'cover',
    position: 'relative',
    [theme.breakpoints.down('sm')]:{
      height: '400px',
    }
    
  },
  hero_title: {
    color: '#fff !important',
    fontSize: '40px !important',
    fontWeight: 'bolder',
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'wrap',
    mixBlendMode: 'lighten',
    [theme.breakpoints.down('sm')]:{
      fontSize: '25px !important'
    }
  },
  hero_subtitle: {
    color: '#fff !important',
    fontSize: '25px !important',
    fontWeight: 'bolder',
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'wrap',
    mixBlendMode: 'lighten',
    [theme.breakpoints.down('sm')]:{
      fontSize: '15px !important'
    }
  },
  // Help cards
  helpcard_section:{
    position: 'relative',
    height: '100%',
    top: '5% auto',
    padding: '5%'
  },
  helpcard: {
    width: '100% !important',
    height: 'auto',
    backgroundColor: '#eeeeee  !important',
    position: 'relative',
  },
  card_title: {
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'wrap'
  }, 
  card_btn: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  card_text: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  call_to_action_text: {
   position: 'relative',
   width: '100%',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   padding: '20px',
   flexFlow: 'wrap',
   color: '#2a4d69 !important',
   fontWeight: 'bolder',
   [theme.breakpoints.down('sm')]:{
    fontSize: '24px !important'
   }
  },

  confirmation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(92,77,105,10)0%, rgba(22,212,255,30) 100%)'
  },
  confirmation_card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeeee  !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexFlow: 'wrap',
    padding: '20px'
  },
  confirmation_text: {
    
  },
  // User
  user_image: {
    position: 'relative',
    width: '100px !important',
    height: '100px !important',
    borderRadius: '50%',
    margin: '2% auto'
  },
  main: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    scrollBehavior: 'smooth'
  },
  user_detials_image: {
    margin: '0 auto',
    borderRadius: '50%',
    padding: '1%'
  },
   
  details_text: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 20px', 
    padding: '2%',
    flexFlow: 'wrap'
  },
  user_card: {
    position: 'relative',
    margin: '2% auto',
    width: '100%'
  },
  user_card_below: {
    position: 'relative',
    margin: '0 auto',
    width: '100%'
  },
  image_card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50% !important',
    position: 'relative',
    [theme.breakpoints.down('sm')]:{
      width: '60%',
      margin: '0 atuo !important'
    }
  }
}));
