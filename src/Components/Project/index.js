// import React from 'react';
// import music from './images/music-clip.png';
// import SEO from './images/fixed-seo-page.png';
// import TCA from './images/team-generator.png';
// import RMG from './images/readme-generator.png';
// import Dashboard from './images/dashboard.png';
// import jsquiz from './images/javascript-quiz.png';
// import Password from './images/password-generator.png';
// import schedule from './images/work-day-scheduler.png';

// import './style.css';

// function Portfolio() {
//       return (
//             <section id="portfolio">
//                   <div className="container">
//                         <div className="row justify-content-center">
//                               <h2 className="text-center mt-5 portfolio">Portfolio</h2>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={music} className="card-img-top" alt="music" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">Music Clip</h5>
//                                                 <p className="card-text">Music Clip is a live web page that helps you find information about music artists, listen to their songs, look at their published works, and their biographies.</p>
//                                                 <a href="https://calcomsci.github.io/Clone-Music-Clip/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/Clone-Music-Clip" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={SEO} className="card-img-top" alt="fix-seo" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">Fixed SEO Web page</h5>
//                                                 <p className="card-text">Every front end software developer should know how to fix links, typos, optimize web pages, and other things in HTML! This is a demo of a fixed HTML page.</p>
//                                                 <a href="https://github.com/calcomsci/fixed-seo-page-repo" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/fixed-seo-page-repo" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={TCA} className="card-img-top" alt="TeamContactGenerator" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">Team Contact Generator</h5>
//                                                 <p className="card-text">Team Contact Generator is an Inquirer and Node.js app that curates a contact list for your team. You can add engineers, interns, and managers' contacts. This requires Visual Studio Code, and Node.js installed to run.</p>
//                                                 <a href="https://github.com/calcomsci/Team-Contact-Generator" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/Team-Contact-Generator" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={RMG} className="card-img-top" alt="rmg" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">README Generator</h5>
//                                                 <p className="card-text">README Generator is a web app that creates a README Generator for you. Every great Github repository demands a README file! You should install Visual Studio Code and node.js for this app.</p>
//                                                 <a href="https://github.com/calcomsci/README-generator" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/README-generator" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={Dashboard} className="card-img-top" alt="weather" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">Weather Dashboard</h5>
//                                                 <p className="card-text">Weather Dashboard is a live web page that finds the weather in cities.</p>
//                                                 <a href="https://calcomsci.github.io/Weather-Dashboard/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/Weather-Dashboard" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={jsquiz} className="card-img-top" alt="javascript-quiz" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">JavaScript Quiz</h5>
//                                                 <p className="card-text">Do you want to test your knowledge in JavaScript? You can take this quiz and find out how much you know about JavaScript!</p>
//                                                 <a href="https://calcomsci.github.io/javascript-quiz-challenge/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/javascript-quiz-challenge" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={Password} className="card-img-top" alt="password-generator" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">Password Generator</h5>
//                                                 <p className="card-text">The Password Generator is a web app that helps you create a secure password, up to 64 characters!</p>
//                                                 <a href="https://calcomsci.github.io/pass-generator.github.io/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/pass-generator.github.io" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
//                                     <div className="card">
//                                           <img src={schedule} className="card-img-top" alt="work day scheduler" />
//                                           <div className="card-body">
//                                                 <h5 className="card-title">Work Day Scheduler</h5>
//                                                 <p className="card-text">This is a web page I created to plan a work day from 9am to 5pm.  </p>
//                                                 <a href="https://calcomsci.github.io/work_scheduler/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Check Out the Web Page</a>
//                                                 <a href="https://github.com/calcomsci/work_scheduler" target="blank" className="ms-5 btn btn-light btn-outline-dark">Check Out the Github Code</a>
//                                           </div>
//                                     </div>
//                               </div>

//                         </div>
//                   </div>
//             </section>
//       )
// }

// export default Portfolio;