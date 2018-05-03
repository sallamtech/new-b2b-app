import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Input, Collapsible, CollapsibleItem, Tabs, Tab, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Register extends React.Component {

    render() {
    
        return (
            <div className="Register">
                
              <Row>
                
                <Col s={12} m={12}>
                
                    <CardPanel className='white' textClassName='black-text'>
                    
                      <h5><strong>Sign up</strong></h5>
                      
                      <Row>
                      
                      <Input s={12} label="Full name" validate/>
                      
                      <Input type="email" label="Email" s={12} />
                      
                      <Input type="password" label="Enter password" s={12} />
                      
                      <Input type="password" label="Confirm password" s={12} />
                      
                      </Row>
                      
                      <Button className='red darken-1' waves='light'>Sign up</Button>
                        
                    </CardPanel>
                    
                    Already have an account?&nbsp;<strong><a href="#sign-in">Login here</a></strong>
                  
                </Col>
                      
              </Row>

            </div>
        );
    }
} 

export default Register;