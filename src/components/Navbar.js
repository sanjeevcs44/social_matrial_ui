import { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
} from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";
import {
  Search,
  Mail,
  Notifications,
  AvTimer,
  Cancel,
} from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
const userStyles = makeStyles((theme) => ({
  toolbar: {
    display: "Flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "White",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",

    display: (props) => (props.open ? "none" : "flex"),
  },
  badges: {
    marginRight: theme.spacing(2),
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(true);
    console.log(open);
  };
  const classes = userStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="h2" className={classes.logoLg}>
          Sanjeev Sharma
        </Typography>
        <Typography variant="h6" component="h2" className={classes.logoSm}>
          Sanjeev
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="search .." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>

        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={clickHandler} />
          <Badge badgeContent={4} color="secondary" className={classes.badges}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badges}>
            <Notifications />
          </Badge>
          <Avatar
            alt="my image"
            src="https://images.unsplash.com/photo-1630305131239-c8df91783f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
