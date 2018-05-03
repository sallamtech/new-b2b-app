import React, { Component } from 'react';
import axios from 'axios';
import {Icon, Input, Button, Col, Row, CardPanel, Slider, Tabs, Tab, CardTitle, Card} from 'react-materialize';

class HomeTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };

  }


  render() {
    return (
      <div className='' >
      
       <Col s={12} m={12}>
       
        <div class="card">
        
         <Tabs className='tab-demo z-depth-1'>
            <Tab title="CATEGORIES" active>
            
            <div class="row">
            <div class="col s6 m3 small">
              <div class="card">
                <div class="card-image">
                  <img style={{height: "140px"}} src="http://anscomputerscny.com/images/ascollage.png"/>
                </div>
              </div>
            </div>
            
             <div class="col s6 m3">
              <div class="card">
                <div class="card-image">
                  <img style={{height: "140px"}} src="http://anscomputerscny.com/images/ascollage.png"/>
                </div>
              </div>
            </div>
            
            <div class="col s6 m3">
              <div class="card">
                <div class="card-image">
                  <img style={{height: "140px"}} src="http://anscomputerscny.com/images/ascollage.png"/>
                </div>
              </div>
            </div>
            
            <div class="col s6 m3">
              <div class="card">
                <div class="card-image">
                  <img style={{height: "140px"}} src="http://anscomputerscny.com/images/ascollage.png"/>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">arrow_forward</i></a>
                </div>
              </div>
            </div>
          </div>
            
            </Tab>
            <Tab title="TOP SELLERS" >
              <div class="row">
                    <div class="col s6 m3 small">
                      <div class="card">
                        <div class="card-image">
                          <img style={{height: "140px"}} src="https://d3pcsg2wjq9izr.cloudfront.net/files/79947/images/34ormat-logo_400.jpg"/>
                        </div>
                      </div>
                    </div>
                    
                     <div class="col s6 m3">
                      <div class="card">
                        <div class="card-image">
                          <img style={{height: "140px"}} src="https://i2.wp.com/www.nigerianinfopedia.com/wp-content/uploads/2018/01/images-1.jpg?resize=300%2C160&ssl=1"/>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col s6 m3">
                      <div class="card">
                        <div class="card-image">
                          <img style={{height: "140px"}} src="http://1.bp.blogspot.com/-lKAX8LFLNVw/Us0gyD6qFUI/AAAAAAAAAgo/0GUbXsZKff8/s1600/sotiba.jpg"/>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col s6 m3">
                      <div class="card">
                        <div class="card-image">
                          <img style={{height: "140px"}} src="https://www.charlieonbroadway.com/wp-content/uploads/2016/09/1200x630_FB_OGImage.jpg"/>
                          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">arrow_forward</i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                    
            </Tab>
        </Tabs>
        
            
          </div>
                         
      </Col>
      </div>
      
    );
  }
}

export default HomeTabs;