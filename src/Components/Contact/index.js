import React from 'react';
import './style.css';
function Contact() {
      return (
            <section className="bg-light about-page" id="contact">
                  <div className="container">
                        <div className="row justify-content-center">
                              <div className="col-lg-6 text-center">
                                    <h2 className="text-white text-center mb-5 contact">Connect and Contact</h2>
                                    <hr></hr>
                                    <div className="row">
                                          <div className="btn btn-primary">
                                                <a className="text-decoration-none text-white" href="https://www.linkedin.com/in/mirza-awal-5972511b5/" target="blank"><i
                                                      className="fab fa-linkedin-in fa-4x"></i>
                                                      <p className="text-center">Linkedin</p>
                                                </a>
                                          </div>
                                          <div className="btn btn-info btn-lg">
                                                <a className="text-decoration-none text-white" href="mailto:calcomsci@outlook.com" target="blank"><i className="fas fa-envelope-open-text fa-4x"></i>
                                                      <p className="text-center">Email</p>
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