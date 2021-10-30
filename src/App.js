import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Jumbotron from './components/Jumbotron';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
      return (
            <BrowserRouter>
                  <Navigation />
                  <Switch>
                        {/* <Route exact path="/PortfolioWithReact/" component={Jumbotron} /> */}
                        <Route exact path="/about" component={About} />
                        <Route exact path="/project" component={Project} />
                        <Route eaxct path="/contact" component={Contact} />

                  </Switch>
                  <Footer />

            </BrowserRouter>
      )
}

export default App;