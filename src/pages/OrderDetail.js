import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class OrderDetail extends React.Component {

    render() {
    
        return (
            <div className="OrderDetail">
                
                <Row>
                
                    <Col s={12} m={12}>
                    
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>Order Detail</h5>
                            <p>Order <strong>3</strong> was placed on <strong>March 7, 2018</strong>.</p>
                        </CardPanel>
                    
                    </Col>
                    
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>Product List</h5>
                            <br/>
                            <form s={6} xs={6} onSubmit={this.handleSubmit}>
                        <Table>
                          <thead>
                            <tr>
                              <th data-field="product">Product</th>
                              <th data-field="quantity">Quantity</th>
                              <th data-field="total">Total</th>
                              <th data-field="status">Status</th>
                            </tr>
                          </thead>
                        
                          <tbody>
                            <tr>
                              <td><a href="#single">Iphone 7</a></td>
                              <td>1</td>
                              <td>$800.00</td>
                              <td>
                                <Input s={12} type='select' label="" defaultValue='1'>
                                    <option value='1'>Pending payment</option>
                                    <option value='2'>Processing</option>
                                    <option value='3'>On hold</option>
                                    <option value='4'>Completed</option>
                                    <option value='5'>Cancelled</option>
                                    <option value='6'>Refunded</option>
                                    <option value='7'>Failed</option>
                                    <option value='8'>Confirmed</option>
                                    <option value='9'>Fund requested</option>
                                </Input>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        
                        <Button class="blue" waves='light' type="submit">Update order</Button>
                        </form>
                        
                        </CardPanel>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Customer details'>
                            <span><strong>Email:</strong>&nbsp;test@examplestore.com<br/>
                            <strong>Telephone:</strong>&nbsp;555-123-1234
                            <br/><br/>
                            <h6><strong>Billing Address</strong></h6>
                            Example Store<br/>
                            Electronics Store<br/>
                            99 Test Rd<br/>
                            City, NY 12345
                            </span>
                        </Card>
                        
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default OrderDetail;