import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwipeableDrawer, Toolbar, AppBar, Typography, Button, IconButton, Avatar, ListItem, ListItemIcon, ListItemText, List, Divider, } from '@material-ui/core';
import { GetAppRounded, EmailRounded, GitHub, LinkedIn, Phone, Home, InfoRounded, ContactMailRounded } from '@material-ui/icons/';
import MenuIcon from "@material-ui/icons/Menu";
import Resume from "./Resume.pdf"
import Profile from "../../components/Jumbotron/images/profilepic.jpg";
//import coverImage from "./images/cover-image.png";
import useStyles from './style';
import './style.css';



function Navigation(props) {
      const [clicked, setClicked] = useState(false);
      const classes = useStyles();
      const InfoList = [

            {
                  text: 'awal.mirza2016@gmail.com',
                  icon: <EmailRounded />,
                  link: "awal.mirza2016@gmail.com",
            },
            {
                  text: 'GitHub',
                  icon: <GitHub />,
                  link: "https://github.com/mirzadev",
            },
            {
                  text: 'LinkedIn',
                  icon: <LinkedIn />,
                  link: "https://www.linkedin.com/in/mirza-awal-5972511b5/",
            },
            {
                  text: 'Phone',
                  icon: <Phone />,
                  link: "9545135171",
            },

      ]



      return (
            <div>


                  <AppBar className={classes.appBar} position="static" color="inherit">

                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { setClicked(true) }}>
                              <MenuIcon />
                        </IconButton>
                        <div className={classes.brandContainer}>
                              <Button component={Link} to="/ProjectWithReact">
                                    <a className="navbar-brand" id="brandName" href="/">
                                          <img id="my-picture" src={Profile} alt="" height="75" width="75"></img >Mirza Abdul Awal - Full Stack Developer</a>

                              </Button>
                        </div>
                        <div>
                        </div>
                        <Toolbar className={classes.toolbar} >
                              <div className={classes.profile}>
                                    <Typography className={classes.heading} align="left">
                                          <Button className={classes.button} id="component-item" component={Link} to="/about">About</Button>
                                    </Typography>
                                    <Typography className={classes.heading} align="left">
                                          <Button className={classes.button} id="component-item" component={Link} to="/project">Project</Button>
                                    </Typography>
                                    <Typography className={classes.heading} align="left">
                                          <Button className={classes.button} id="component-item" component={Link} to="/contact">Contact</Button>
                                    </Typography>
                                    <Typography className={classes.heading} align="left">
                                          <Button className={classes.button} id="component-item" href={Resume}>Resume</Button>
                                    </Typography>
                              </div>
                        </Toolbar>
                  </AppBar>
                  <SwipeableDrawer
                        anchor="left"
                        open={clicked}
                        onClose={() => { setClicked(false) }}
                        onOpen={() => { }}
                        className={classes.drawer}>
                        <a href="/ProjectWithReact"
                              className={classes.roundedPic}>
                              <Avatar
                                    alt="Profile pic"
                                    src={Profile}
                                    className={classes.roundedPic}
                                    id="avatar" />
                        </a>
                        <List>
                              {InfoList.map((item, index) => {
                                    const { text, icon, onClick, link } = item;
                                    return (
                                          <a href={link} target="_blank" rel="noopener noreferrer" primary={text} style={{ color: "#8B0000", textDecoration: "none" }} >
                                                <ListItem button key={text} onClick={onClick}>
                                                      {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                                      <ListItemText primary={text} />
                                                </ListItem>
                                          </a>
                                    )
                              })}
                              <ListItem>
                                    <ListItemIcon>
                                          <Phone />
                                    </ListItemIcon>
                                    <ListItemText primary="(954)555-6666" />
                              </ListItem>
                        </List>
                        <Divider />
                        <List>
                              <Link to="/ProjectWithReact" style={{ color: "#000000", textDecoration: "none" }}>
                                    <ListItem button key="Home">
                                          <ListItemIcon>
                                                <Home />

                                          </ListItemIcon>
                                          <ListItemText primary="Home" />
                                    </ListItem>
                              </Link>
                        </List>
                        <List>
                              <Link to="/about" style={{ color: "#000000", textDecoration: "none" }}>
                                    <ListItem button key="About">
                                          <ListItemIcon>
                                                <InfoRounded />
                                          </ListItemIcon>
                                          <ListItemText primary="About" />
                                    </ListItem>
                              </Link>
                        </List>
                        <List>
                              <Link to="/contact" style={{ color: "#000000", textDecoration: "none" }}>
                                    <ListItem button key="Contact">
                                          <ListItemIcon>
                                                <ContactMailRounded />
                                          </ListItemIcon>
                                          <ListItemText primary="Contact" />
                                    </ListItem>
                              </Link>
                        </List>
                        <Divider />
                        <List>
                              <a href={Resume} rel="noreferrer" style={{ color: "#000000", textDecoration: "none" }} >
                                    <ListItem>
                                          <ListItemIcon>
                                                <GetAppRounded />
                                          </ListItemIcon>
                                          <ListItemText primary="Resume" />
                                    </ListItem>
                              </a>
                        </List>
                  </SwipeableDrawer>
                  {/* <div className="my-5" >

                        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
                  </div > */}

            </div>

      )

}

export default Navigation;