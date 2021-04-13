import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className="navbar__elements">
            <h3 className="navbar__title">SubBuster</h3>
            <a className="navbar__link navbar__link__1" href="/">Home</a>
            <a className="navbar__link" href="https://cyberxplore.com/" target="_blank">About Us</a>
            <a className="navbar__link" href="https://edu.cyberxplore.com/" target="_blank">Learn BugBounty</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
