import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <Router>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://startbootstrap.github.io/startbootstrap-scrolling-nav/css/scrolling-nav.css" ></link>

        <Navbar />
        <Header />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}

            <section id="about">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 mx-auto">
                      <Switch>
                        <Route exact path="/">
                           Index/of
                        </Route>
                        <Route path="/about">
                           Hola, esto es el about us del sitio.
                        </Route>
                        <Route path="/dashboard">
                           //Dashboard of data and scoreboard
                        </Route>
                      </Switch>                      
                    </div>
                  </div>
                </div>
              </section>

            <Footer />


      </Router>
    )
  }
}

export default App;
