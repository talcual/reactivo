
import React, { Component } from 'react';
import {  Link   } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
              <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">OpenTrading</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <Link to="/" class="nav-link js-scroll-trigger">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about" class="nav-link js-scroll-trigger">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/dashboard" class="nav-link js-scroll-trigger">Dashboard</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}

export default Navbar;