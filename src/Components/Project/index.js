import React from 'react';
import CuckoosLibrary from './images/Project-1-Cuckoos-Library.JPG';
import MusicWorld from './images/Project-2-Music-World-Ecommerce.png';
import SocialNetwork from './images/Social-Network-API.JPG';
import EmpTracker from './images/Employee-Tracker.JPG';
import BudTracker from './images/Budget-Tracker.JPG';
import NoteTaker from './images/Note-Taker.JPG';
import TeamGen from './images/Team-Generator.JPG';
import PasswordGen from './images/Password-Generator.JPG';
import WeatherApp from './images/Weather-Application-Dashboard.JPG';
import ReadmeGen from './images/Professional-Readme-Generator.JPG';

import './style.css';


function Project() {
      return (
            <section id="project">
                  <div className="container">
                        <div className="row justify-content-center">
                              <h2 className="text-center mt-5 project">MY ALL PROJECTS</h2>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={CuckoosLibrary} className="card-img-top" alt="CuckoosLibrary" />
                                          <div className="card-body">
                                                <h5 className="card-title">Library Application (Project-1)</h5>
                                                <p className="card-text">Cuckoo's Library is an online library that helps an individual to find, save and read books to enrich own knowledge without physically visiting a library. The user of this application will be able to find books using author's name, book title or genre.</p>
                                                <a href="https://cuckoos-library.netlify.app/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Click for Deployed Web Page</a>
                                                <a href="https://github.com/mirzadev/project-cuckoos-library" target="blank" className="ms-5 btn btn-light btn-outline-dark">Click for Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={MusicWorld} className="card-img-top" alt="MusicWorld" />
                                          <div className="card-body">
                                                <h5 className="card-title">Music World E-Commerce (Project-2)</h5>
                                                <p className="card-text">Music World E-Commerce is an online musical instrument shopping store that allows an user to find, compare the prices and purchase without visiting the store physically. There six categories of musical instruments.</p>
                                                <a href="https://music-world-e-commerce.herokuapp.com/homepage" target="blank" className="ms-5 btn btn-dark btn-outline-light">Click for Deployed Web Page</a>
                                                <a href="https://github.com/mirzadev/music-world-ecommerce" target="blank" className="ms-5 btn btn-light btn-outline-dark">Click for Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={SocialNetwork} className="card-img-top" alt="SocialNetwork" />
                                          <div className="card-body">
                                                <h5 className="card-title">Social Network API</h5>
                                                <p className="card-text">Social Media Network is network that allows to create friend, share comments and opinions on that. Using this application one user can create own friends or delete own friends including their opinions and comments.</p>
                                                <a href="https://watch.screencastify.com/v/NooD095Eh21cms12nMIt" target="blank" className="ms-5 btn btn-dark btn-outline-light">Frontend App</a>
                                                <a href="https://www.youtube.com/watch?v=gDaMHFvF6Xs" target="blank" className="ms-5 btn btn-light btn-outline-dark">Backend API</a>
                                                <a href="https://github.com/calcomsci/Team-Contact-Generator" target="blank" className="ms-5 btn btn-light btn-outline-dark">Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={EmpTracker} className="card-img-top" alt="EmpTracker" />
                                          <div className="card-body">
                                                <h5 className="card-title">Employee Tracker</h5>
                                                <p className="card-text">My-Employee-Tracker is an application that helps the management to view all departments, roles, vemployees or add a department, role, employee, and also update an employee role. This application is created using the mysql database which is connected with the application through node.js.</p>
                                                <a href="https://www.youtube.com/watch?v=jaZq0-eY0DU" target="blank" className="ms-5 btn btn-dark btn-outline-light">Click for Walkthrough VDO</a>
                                                <a href="https://github.com/mirzadev/My-Employee-Tracker" target="blank" className="ms-5 btn btn-light btn-outline-dark">Click for Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={BudTracker} className="card-img-top" alt="BudTracker" />
                                          <div className="card-body">
                                                <h5 className="card-title">Budget Tracker PWA</h5>
                                                <p className="card-text">Budget Teacker is Progressive Web Application which is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.It resemble native mobile apps and allow users to interact with the application even when there is no internet connection or cell service.</p>
                                                <a href="https://budget-tracker-pwa-mirza.herokuapp.com/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Click for Deployed Web Page</a>
                                                <a href="https://github.com/mirzadev/budget-tracker-pwa" target="blank" className="ms-5 btn btn-light btn-outline-dark">Click for Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={NoteTaker} className="card-img-top" alt="NoteTaker" />
                                          <div className="card-body">
                                                <h5 className="card-title">Note Taker</h5>
                                                <p className="card-text">"My Note Taker" is aimed to help those professionals to keep a note of their tasks. Using this note one should be able to first write the main task as heading and then description of their task. After writing, the application will give an option to save the noted task. Once the task is completed, the professional should be able to delete the task from the note.</p>
                                                <a href="https://note-taker-mirza.herokuapp.com/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Click for Deployed Web Page</a>
                                                <a href="https://github.com/mirzadev/My-Note-Taker" target="blank" className="ms-5 btn btn-light btn-outline-dark">Click for Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={TeamGen} className="card-img-top" alt="TeamGen" />
                                          <div className="card-body">
                                                <h5 className="card-title">Team Profile Generator</h5>
                                                <p className="card-text">Team Profile Generator is an application that allows the management to keep track of their team members and their occupation details. The system will prompt for the input at the begining and at the end will serve with the details of each employee as summery.</p>
                                                <a href="https://drive.google.com/file/d/1KFIhgu2eUJxbEVssg5S1yPbxP7SwgJVb/view" target="blank" className="ms-5 btn btn-dark btn-outline-light">Click for Walkthrough VDO</a>
                                                <a href="https://github.com/mirzadev/Team-Profile-Generator" target="blank" className="ms-5 btn btn-light btn-outline-dark">Click for Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={PasswordGen} className="card-img-top" alt="PasswordGen" />
                                          <div className="card-body">
                                                <h5 className="card-title">Password Generator</h5>
                                                <p className="card-text">This application will generate password as per the user's requirement. The system will prompt the number of characters and requirements with windows prompt and generate the required password at the end.</p>
                                                <a href="https://github.com/mirzadev/Challenge-3-Password-Generator" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
                                                <a href="https://github.com/mirzadev/Challenge-3-Password-Generator" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={WeatherApp} className="card-img-top" alt="work day scheduler" />
                                          <div className="card-body">
                                                <h5 className="card-title">Weather Application Dashboard</h5>
                                                <p className="card-text">This application was aimed to allow the user to view the weather condition of his/her selected area. It also says the weather forcast for next seven days.</p>
                                                <a href="https://github.com/mirzadev/Weather-Application-Dashboard" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
                                                <a href="https://github.com/mirzadev/Weather-Application-Dashboard" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                                    <div className="card">
                                          <img src={ReadmeGen} className="card-img-top" alt="work day scheduler" />
                                          <div className="card-body">
                                                <h5 className="card-title">Professional README Generator</h5>
                                                <p className="card-text">Professional README Generator will allow a developer to explain about his/her application working process. All related guidelines for running the application is described here.</p>
                                                <a href="https://github.com/mirzadev/Weather-Application-Dashboard" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
                                                <a href="https://github.com/mirzadev/Weather-Application-Dashboard" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
                                          </div>
                                    </div>
                              </div>

                        </div>

                  </div>

            </section>
      )
}

export default Project;