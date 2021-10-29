import React from 'react';
import './style.css';
//import coverImage from "./images/cover-image.png";


function About() {
      return (
            <section className="bg-light about-page" id="about">
                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-lg-9 text-center">
                                    {/*<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />*/}
                                    <h2 className="text-center mt-0 about">About Me</h2>
                                    <hr className="divider my-4" color="#408eff" />
                                    <p className="text-muted mb-0">Mirza Abdul Awal - A full Stack Web Developer with a strong background in complete software development process. I have equal expertise in front end and as well as backend. My main language of work is JavaScript. Before becoming a full stack developer, I have the experience of working as Quality Assurance Analyst with the adequate skill on automation and API testing covering noth web and mobile applications</p>
                                    <p></p>
                                    <p className="text-muted mb-0">As a Front end developer, I have the skill on React, JavaScript, HTML, CSS, node.js and Inquirer. Using these experience I have created applications like "Password Generator", "Quiz Code", "Workday Schedule" and "Weather API". I also worked on a project "Kukoo's Library" using third party APIs with my team and deployed the application successfully</p>
                                    <p></p>
                                    <p className="text-muted mb-0">As a back end developer, I have the skills on Express.js, SQL and Handlebars, and using the OOps, ORM and MVC concept created API. As a result I could successfully complete a project name "Music World E-commerce" with my team and deployed using Heroku.</p>
                                    <p></p>
                                    <p className="text-muted mb-0">I also have the skill on working with MangoosDB, and Progressive Web Application development.</p>
                                    <p></p>
                                    <p className="text-muted mb-0">Currently I am working as Software Quality Assurance Analyst with ARC-One Solutions, where I have an unique opportunity to work with a highly skilled front end and back end developers and develop a timely software for American Red Cross and One Blood.</p>
                                    <hr></hr>
                                    <div className="col-sm-12">
                                          <a href="https://github.com/mirzadev" className="btn btn-dark about-btn btn-outline-light" target="blank" role="button"><i className="fab fa-github"></i> Github</a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default About;