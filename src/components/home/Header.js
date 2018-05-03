import React, { Component } from 'react';
import axios from 'axios';
import {Icon, Input, Button, Col, Row, CardPanel, Slider, Slide} from 'react-materialize';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };

  }


  render() {
    return (
      <div className='' >
      
       <Col s={12} m={12}>
                         
          <div class="section no-pad-bot blue-grey lighten-5" id="index-banner">
           <Slider>
                <Slide
                  src="https://image.freepik.com/free-photo/blue-sky-with-clouds_1112-454.jpg"
                  title="This is our big Tagline!">
                  Here's our small slogan.
                </Slide>
                <Slide
                  src="https://image.freepik.com/free-photo/blue-sky-with-clouds_1112-454.jpg"
                  title="Left aligned Caption"
                  placement="left">
                  Here's our small slogan.
                </Slide>
                <Slide
                  src="http://lorempixel.com/580/250/nature/3"
                  title="Right aligned Caption"
                  placement="right">
                  Here's our small slogan.
                </Slide>
              </Slider>
        </div>
      </Col>
      </div>
    );
  }
}

export default Header;