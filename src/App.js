import logo from "./logo.svg";
import { Button, makeStyles, Grid } from "@material-ui/core";
import { Person } from "@material-ui/icons";
//import "./App.css";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Ads from "./components/Ads";
const userStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "black",
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function App() {
  const classes = userStyles();
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Ads />
    </div>
  );
}

export default App;
