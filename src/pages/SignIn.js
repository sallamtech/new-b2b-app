import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Input, Collapsible, CollapsibleItem, Tabs, Tab, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class SignIn extends React.Component {

    render() {
    
        return (
            <div className="SignIn">
                
              <Row>
                
                <Col s={12} m={12}>
                
                    <CardPanel className='white' textClassName='black-text'>
                    
                      <h5><strong>Log in</strong></h5>
                      
                      <Row>
                      
                      <Input s={12} label="Email or Username" validate/>
                      
                      <Input type="password" label="Enter password" s={12} />
                      
                      </Row>
                      
                      <Button className='red darken-1' waves='light'>Log in</Button>
                        
                    </CardPanel>
                    
                    <br/><br/>
                    
                    Forgot your password?&nbsp;
                    
                                <Modal
                          header='Forgot password'
                          fixedFooter
                          trigger={<strong><a href="#forgot-password">Click here</a></strong>}>
                          
                           
                            <Row>
                            <br/>
                            Enter your username or email address.
                            <br/>
                            <Input s={12} label="Email or Username" validate/>
                            
                            </Row>  
                            
                            <Button class="blue" waves='light' type="submit">Get password</Button>
                        
                        
                        </Modal>
                  
                  <br/><br/>
                  Do not have an account?&nbsp;<strong><a href="#register">Signup here</a></strong>
                  
                </Col>
                      
              </Row>

            </div>
        );
    }
} 

export default SignIn;