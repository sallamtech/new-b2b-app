import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class OrderReceived extends React.Component {

    render() {
    
        return (
            <div className="OrderReceived">
                
                <Row>
                
                    <Col s={12} m={12}>
                    
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>Order received</h5>
                            <p>Thank you. Your order has been received.</p>
                        </CardPanel>
                    
                    </Col>
                    
                    <Col s={12} m={2}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <span><strong>ORDER NUMBER:</strong></span><br/>
                                <span>3</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={2}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <span><strong>DATE:</strong></span><br/>
                                <span>March 9, 2018</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={4}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <span><strong>EMAIL:</strong></span><br/>
                                <span>test@examplestore.com</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={2}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <span><strong>TOTAL:</strong></span><br/>
                                <span>$840.00</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={2}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <span><strong>PAYMENT METHOD:</strong></span><br/>
                                <span>Cash on delivery</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>Order details</h5>
                            <br/>
                        <Table>
                          <thead>
                            <tr>
                              <th data-field="product">Product</th>
                              <th data-field="quantity">Quantity</th>
                              <th data-field="total">Total</th>
                            </tr>
                          </thead>
                        
                          <tbody>
                            <tr>
                              <td><a href="#single">Iphone 7</a></td>
                              <td>1</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td><a href="#single">Charger</a></td>
                              <td>2</td>
                              <td>$40.00</td>
                            </tr>
                            <tr>
                              <td><strong>Subtotal:</strong></td>
                              <td></td>
                              <td><strong>$840.00</strong></td>
                            </tr>
                            <tr>
                              <td><strong>Payment method:</strong></td>
                              <td></td>
                              <td><strong>Cash on delivery</strong></td>
                            </tr>
                            <tr>
                              <td><strong>Total:</strong></td>
                              <td></td>
                              <td><strong>$840.00</strong></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td><strong>Note:</strong></td>
                              <td></td>
                              <td><strong>Pick up at 3 pm.</strong></td>
                            </tr>
                          </tbody>
                        </Table>
                        
                        </CardPanel>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Billing Address'>
                            <span>
                            Example Store<br/>
                            Electronics Store<br/>
                            99 Test Rd<br/>
                            City, NY 12345<br/>
                            555-555-5555<br/><br/>
                            test@examplestore.com
                            </span>
                        </Card>
                        
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default OrderReceived;