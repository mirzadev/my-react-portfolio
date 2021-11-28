import React from 'react';

import './style.css';

function Contact() {
      return (
            <section className="bg-light about-page" id="contact">
                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-lg-6 text-center" >
                                    <h1 className="text-white text-center mb-5 contact" id="connect-contact">CONNECT AND CONTACT</h1>
                                    <hr></hr>
                                    <div className="row">
                                          <div className="btn btn-primary">
                                                <a className="text-decoration-none text-white" href="https://www.linkedin.com/in/mirza-awal-5972511b5/" target="blank"><i
                                                      className="fab fa-linkedin-in fa-4x"></i>
                                                      <p className="text-center">Linkedin</p>
                                                </a>
                                          </div>
                                          <div className="btn btn-info btn-lg">
                                                <a className="text-decoration-none text-white" href="mailto:awal.mirza2016@gmail.com" target="blank"><i className="fas fa-envelope-open-text fa-4x"></i>
                                                      <p className="text-center">Email</p>
                                                </a>
                                          </div>
                                          <div className="btn btn-success btn-lg">
                                                <a className="text-decoration-none text-white" href="https://docs.google.com/document/d/1fteQ2E_W3jzpTtETdvicKsLohBj_BA56MxCiG4mnhMs"><i className="fas fa-tty fa-4x"></i>
                                                      <p className="text-center">Phone</p>
                                                </a>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}



export default Contact;

