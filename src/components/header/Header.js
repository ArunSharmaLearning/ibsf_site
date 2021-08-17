import React from 'react';
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    // marginLeft: theme.spacing(1),
    // size:"1rem"
    // flex: 1,
    padding:"1rem",

  },
  iconButton: {
    padding: 10,
    fontSize:'1rem',
    border:'none',
    outline:'none'
  },




}));


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Header() {
  const history = useHistory();
  const classes = useStyles();
    return (
      
      <div className = "MainHeader">
      <div class="pre-header">
      <div class="ui container" style={{}}>
        <img
          class="ui_small_image"
          src="http://ibsf.info/images/banners/IBSF%20LOGO%20half4.png"
          onClick={()=>history.push("/")}
          style={{objectFit:"contain" , position:"absolute" }}
          
        />
      </div>
    </div>

    <div class="topnav" id="myTopnav">
      <div class="ui container" style={{backgroundColor: ""}}>
        <a className="" onClick={()=>history.push("/")} >Home </a>
        <a className="" onClick={()=>history.push("/news")}>News</a>
        <a className="" onClick={()=>history.push("/")}>Results</a>
        <a className="" onClick={()=>history.push("/")}>Calendar</a>

        <div class="dropdown">
          <button class="dropbtn" onClick={()=>history.push("/aboutus")}>
            About Us
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">IBSF Executives</a>
            <a href="#">Member Countries</a>
            <a href="#">Past Champions</a>
            <a href="#">Downloads</a>
            <a href="#">Rules of Snooker</a>
          </div>
        </div>

        <a href="#home">Women Ranking</a>
        <a href="#home">Coaching</a>


        <div class="dropdown">
          <button class="dropbtn">
            Gallery's
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Photographs</a>
          </div>
        </div>
        
        <a href="#about">Contacts</a>
        
      
        <div class="search-container">


        <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        className="header_input"
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon style={{fontSize:"2rem" , outline:"none" , border:"none"}} />
      </IconButton>
      
    </Paper>


        </div>
        <a
          href="javascript:void(0);"
          style={{fontSize: "15px"}}
          class="icon"
          onClick={myFunction}
          >&#9776;</a>
      </div>
    </div>

      </div>
      
    );
}

export default Header;