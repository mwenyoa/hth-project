import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Menu,
  Popover,
  MenuItem,
  CssBaseline,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../Styles";
import { Link } from "react-router-dom";
import {} from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover2" : undefined;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <CssBaseline />
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleClick}
          >
            About Us
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/our-history"} className={classes.dd_link}>
                Our History
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/create-workplace"} className={classes.dd_link}>
                Where We Work
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"#"} className={classes.dd_link}>
                Mission & Vision
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"#"} className={classes.dd_link}>
                Our Team
              </Link>
            </MenuItem>
          </Popover>

          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick2}
          >
            Our Works
          </IconButton>
          <Popover
            id={id2}
            open={open2}
            anchorEl={anchorEl2}
            onClose={handleClose2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={handleClose2}>Health</MenuItem>
            <MenuItem onClick={handleClose2}>Water & Sanitation</MenuItem>
            <MenuItem onClick={handleClose2}>Education</MenuItem>
            <MenuItem onClick={handleClose2}>Social Welfare</MenuItem>
            <MenuItem onClick={handleClose2}>Work With Others</MenuItem>
            <MenuItem onClick={handleClose2}>Development</MenuItem>
          </Popover>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
