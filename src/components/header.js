import React, { Component } from 'react';

class Header extends React.Component {
    render(){
        return(
            <header class="bg-primary text-white">
            <div class="container text-center">
              <h1>OpenTrading, React Props</h1>
              <p class="lead">Video & Content for Trading</p>
            </div>
          </header>  
        )
    }
}

export default Header;
