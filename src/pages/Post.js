import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Input, Collapsible, CollapsibleItem, Tabs, Tab, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Post extends React.Component {

    render() {
    
        return (
            <div className="Post">
                
              <Row>
                
                <Col s={12} m={12}>
                        
                    <CardPanel className='white' textClassName='black-text'>
                      <h5><strong>Post</strong></h5>
                    </CardPanel>
                    
                    <Collapsible accordion>
                      <CollapsibleItem header='1: Select your pricing plan'>
                        
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title='$0.00'>
                              <span><strong>Free</strong>
                              &nbsp;-&nbsp;This plan includes 30 products.
                              <br/><br/>One month free.
                              </span>
                              <br/><br/>
                              <Button className='light-blue darken-4' waves='light'>Select</Button>
                              
                          </Card>
                    
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title='$30.00'>
                              <span><strong>Basic</strong>
                              &nbsp;-&nbsp;This plan includes 30 products.
                              <br/><br/>Basic plan
                              </span>
                              <br/><br/>
                              <Button className='light-blue darken-4' waves='light' >Select</Button>
                              
                          </Card>
                    
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title='$50.00'>
                              <span><strong>Featured</strong>
                              &nbsp;-&nbsp;This plan includes 30 products.
                              <br/><br/>Products posted under this plan will be featured.
                              </span>
                              <br/><br/>
                              <Button className='light-blue darken-4' waves='light' >Select</Button>
                              
                          </Card>

                      </CollapsibleItem>
                      <CollapsibleItem header='2: Sign in or register'>
                        
                        You do not have an account?&nbsp;<strong><a href="#register">Register</a></strong>
                        <br/><br/>
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title=''>
                              
                            <Row>
                                <Input s={12} label="Username (*)" />
                                <Input type="password" label="password" s={12} />
                                
                                <br/><br/>
                                <Button className='light-blue darken-4' waves='light' >Sign in</Button>
                                
                            </Row>
                              
                          </Card>
                        
                      </CollapsibleItem>
                      <CollapsibleItem header='3: Enter your listing details'>
                        

                            <Row>
                            
                            <Input placeholder="" s={6} label="Title" />
                            
                            <Input placeholder="" s={6} label="Price ($)" />
                            
                            <Input placeholder="" s={6} label="Address" />
                            
                            <Input s={6} type='select' label="Location" defaultValue='1'>
                              <option value='1'>New York</option>
                              <option value='2'>Other</option>
                            </Input>
                            
                            <Input s={12} type='select' label="Category" defaultValue='1'>
                            <option value='1'>Select some categories</option>
                            <option value='2'>Category 1</option>
                            <option value='3'>Category 2</option>
                            </Input>
                            
                            <Input type="textarea" name="description" s={12} label="Description" onChange={this.handleChange} />
                            
                            </Row>  
                            
                            <Button className='light-blue darken-4' waves='light' type="submit">Continue</Button>
                            

                        
                      </CollapsibleItem>
                      <CollapsibleItem header='4: Select your payment method'>
                        
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title=''>
                              

                            <Row>
                            
                            <Input placeholder="" s={12} label="Enter your coupon" />
                            <br/>
                            <strong>Total price</strong>&nbsp;$30
                            
                            </Row>  
                            
                            <Button className='light-blue darken-4' waves='light' type="submit">Free Post</Button>
                            

                              
                          </Card>
                    
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title='Cash'>
                              <span>Send your cash payment to our bank account</span>
                              <br/><br/>
                              <Button className='light-blue darken-4' waves='light' >Select</Button>
                              
                          </Card>
                    
                        <Card 
                          header=''
                          className='white' 
                          textClassName='black-text' 
                          title='PayPal'>
                              <span>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</span>
                              <br/><br/>
                              <Button className='light-blue darken-4' waves='light' >Select</Button>
                              
                          </Card>
                        
                      </CollapsibleItem>
                    </Collapsible>
                    
                </Col>
                      
              </Row>
              
            </div>
        );
    }
} 

export default Post;