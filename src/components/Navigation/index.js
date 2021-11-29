import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwipeableDrawer, Toolbar, AppBar, Typography, Button, IconButton, ListItem, ListItemIcon, ListItemText, List, Divider, } from '@material-ui/core';
import { GetAppRounded, EmailRounded, GitHub, LinkedIn, Phone, Home, InfoRounded, ContactMailRounded } from '@material-ui/icons/';
import MenuIcon from "@material-ui/icons/Menu";
import Resume from "./Resume.pdf"
import useStyles from './style';
import './style.css';
import Profile from './images/profilepic.jpg';
import { Avatar } from '@material-ui/core';
import coverImage from './images/profile-pic-2.jpg'



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
                  link: "https://docs.google.com/document/d/1fteQ2E_W3jzpTtETdvicKsLohBj_BA56MxCiG4mnhMs",
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
                              <div className={classes.profile} id="navbar-items">
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

                        </List>
                        <Divider />
                        <List>
                              <Link to="/about" style={{ color: "#000000", textDecoration: "none" }}>
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
                  <div className="my-5" Id="cover-image" >
                        <img id="profile-pic-2" src={coverImage} className="my-2" alt="cover" height="250" width="250" />
                        <h4 className="text-muted mb-0" id="home-profile">
                              An enthusiastic, devoted, and proficient candidate having experience in the field of Quality Assurance (QA) and software development, enriched with diverse expertise in Automation, web design and software development, with the capability of working in complex, fast paced and project-based environment. I am highly interested in building my career as a leading Full Stack Developer in diverse domain of the industry.
                        </h4>
                  </div >

            </div>

      )

}

export default Navigation;